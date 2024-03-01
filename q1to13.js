// Question NO 02 //
var personName = "Mahnoor rao";
console.log("Hello", personName, "would you like to learn some python today?");
// Question No 03 //
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
// Question NO 04 //
console.log("Albert Einstein once said,\"A person who never made a mistake never tried anything new.\"");
// Question NO 05 //
var famousPerson = "Albert Einstine";
var message = "once said, “A person who never made a mistake never tried anything new.”";
console.log(famousPerson, message);
// Question No 06 //
var whitespaceName = "\n\t Munazzah Fatima \t\n";
console.log(whitespaceName);
var withoutwhitespaceName = whitespaceName.trim();
console.log(withoutwhitespaceName);
// Question NO 07,08 //
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
// Question NO 09 //
var favName = 10;
var messmage = "mine favorite number";
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
var friendsName = ["Munazzah", "Shahid", "Ayzal", "Diya"];
friendsName.forEach(function (friendname) { return console.log(friendname); });
// Question NO 12 //
var friendsname = ["munazzah", "Shahid", "ayzal", "Diya"];
friendsname.forEach(function (friendName) { return console.log("Hello ".concat(friendName, ", How are you?")); });
// Question No 13 //
var transportationModes = ["Cars", "motorbike", "bus", "cycle"];
transportationModes.forEach(function (mode) { return console.log("I would like to own a ".concat(mode)); });
