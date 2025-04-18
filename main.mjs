import { LinkedList } from "./linked-list.mjs";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("cow");

//  0      1      2
// cow -> dog -> cat
console.log(list.find("cat"));
console.log(list.find("a"));
