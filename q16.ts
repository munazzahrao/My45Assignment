// Question NO 16

let guestList = ["hamza", "usman", "shahid", "Munazzah"];

let dontCome = guestList[0];

guestList.splice(0, 1, "Diya");

console.log("Good news! we have found a bigger table for dinner.");

guestList.unshift("Ali");

guestList.push("Fazila");

let middleIndex: number = Math.floor(guestList.length /2);

guestList.splice(middleIndex, 0, "Aliza");

console.log("updated list of our guest");

guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me?`));


