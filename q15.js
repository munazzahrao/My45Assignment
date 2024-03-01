var guestList = ["hamza", "usman", "shahid", "Munazzah"];
var dontCome = guestList[0];
console.log(dontCome, "he is not coming");
guestList.splice(0, 1, "Diya");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
