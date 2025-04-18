import { LinkedList } from "./linked-list.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("cow");

//  0      1      2
// cow -> dog -> cat
console.log(list.head());
console.log("List.pop()");
console.log(list.pop());
console.log(list.tail());
