var guests = ["Kamran", "Ali", "Adeel"];
console.log("Dear " + guests[0] + ", Your are invited to the Dinner on this Sunday.");
console.log("Dear " + guests[1] + ", Your are invited to the Dinner on this Sunday.");
console.log("Dear " + guests[2] + ", Your are invited to the Dinner on this Sunday.\n");

console.log("Mr. " + guests[2] + " is busy and not available for the Dinner\n");

guests[2] = "Saad";
console.log("Dear " + guests[0] + ", Your are invited to the Dinner on this Sunday.");
console.log("Dear " + guests[1] + ", Your are invited to the Dinner on this Sunday.");
console.log("Dear " + guests[2] + ", Your are invited to the Dinner on this Sunday.\n");

console.log("Greetings: Now we found a bigger dinner table.\n");

guests.unshift("Ahmed");

guests.splice(1,0,"Asif");
guests.push("Nabeel");

for(i=0; i<guests.length; i++)
    console.log("Dear " + guests[i] + ", You are invited to the Dinner on this Sunday.");