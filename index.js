const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contact");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then((contacts) => console.table(contacts));
      break;

    case "get":
      getContactById(id).then((contact) => console.log(contact));
      break;

    case "add":
      addContact(name, email, phone).then((newContact) =>
        console.log(newContact)
      );
      break;

    case "remove":
      removeContact(id).then((removedContact) => console.log(removedContact));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
