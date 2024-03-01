// Question NO 02 //

let personName: string = "Mahnoor rao";
console.log("Hello",  personName, "would you like to learn some python today?");

// Question No 03 //

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));

// Question NO 04 //

console.log("Albert Einstein once said,\"A person who never made a mistake never tried anything new.\"");

// Question NO 05 //

let famousPerson = "Albert Einstine";

let message = "once said, “A person who never made a mistake never tried anything new.”"

console.log(famousPerson, message);

// Question No 06 //

let whitespaceName = "\n\t Munazzah Fatima \t\n";
console.log(whitespaceName);
let withoutwhitespaceName = whitespaceName.trim();
console.log(withoutwhitespaceName);

// Question NO 07,08 //

console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);

// Question NO 09 //

let favName = 10;
let messmage = "mine favorite number";
console.log(message, favName);

// Question No  10 //

// Addition
console.log(4 + 4);

// subtraction
console.log(12 - 4);

// Multiplication 
console.log(2 * 4);

// Division
console.log(16 / 2);

// Question No 11 //

let friendsName = ["Munazzah", "Shahid", "Ayzal", "Diya"];
friendsName.forEach(friendname => console.log(friendname));


// Question NO 12 //

let friendsname = ["munazzah", "Shahid", "ayzal", "Diya"];

friendsname.forEach(friendName => console.log(`Hello ${friendName}, How are you?`));

// Question No 13 //

let transportationModes = ["Cars", "motorbike", "bus", "cycle"]

transportationModes.forEach(mode => console.log(`I would like to own a ${mode}`)); 
 


