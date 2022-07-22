import { Invoice, Payment } from "./classImplementsInterface";
import { hasPrint } from "./interfaceForClass";

const documentOne: hasPrint = new Invoice('Vinamilk', 'dronk milk', 5000000)
const documentTow: hasPrint = new Payment('Vietnam Airlines', 'fly', 25000000)

const allDocuments: hasPrint[] = []
allDocuments.push(documentOne)
allDocuments.push(documentTow)

console.log(allDocuments);
