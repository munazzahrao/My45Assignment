// Question No 17

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


console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite only two guests to dinner with me.");

while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
}

console.log("Invititions to the last two guest");
guestList.forEach(lastTwo => console.log(`Luckly ${lastTwo}, You are still invited to dinner.`));

guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);
