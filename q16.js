// Question NO 16
var guestList = ["hamza", "usman", "shahid", "Munazzah"];
var dontCome = guestList[0];
guestList.splice(0, 1, "Diya");
console.log("Good news! we have found a bigger table for dinner.");
guestList.unshift("Ali");
guestList.push("Fazila");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Aliza");
console.log("updated list of our guest");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me?")); });
