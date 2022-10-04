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

console.log("We have space only for 2 Guests.\n");

console.log("-------------------------");

while (guests.length>2)
{
    console.log("Dear " + guests.pop() + ", Sorry, Due to the limited seats, We can't invite you on the Dinner.");
}

console.log("-------------------------");
for(i=0; i<guests.length; i++)
    console.log("Dear " + guests[i] + ", You are still invited to the Dinner on this Sunday.");

    
console.log("-------------------------");

    while (guests.length>0)
    {
        console.log("Dear " + guests.pop() + ", Sorry, Due to the limited seats, We can't invite you on the Dinner.");
    }

console.log("Guests List: " + guests.length);