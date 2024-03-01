// Question No 30

let users : string [] = ["Eric", "Munazzah", "Ali", "Fatime", "Admin"];

for(let user of users) {
    if (user === "Admin") {
        console.log("Hello Admin, would you like to see a status report?")
    } else {
        console.log (`Hello ${user}, thank you for logging in again`)
    }
};
