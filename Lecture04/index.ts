// Templet Literal

let personName: string = "Muhammad Kamran";
let age: number = 30;

let message: string = "My name is "+ personName + " and my age is "+ age;
console.log(message);

let messageText: string = `with Template litral: My name is ${personName} and my age is ${age}.`;

console.log(messageText);

let productName: string = "12 roses";
let price: number = 50
let disc: string = "A bouquet of 12 roses";

console.log(`
Name: ${productName}
Price: ${price} USD
description: ${disc}
`
)
