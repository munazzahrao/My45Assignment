// Question No 32

let current_users : string [] = ["admin", "Eric", "Ali", "hamza", "Fazila"]
let new_users : string [] = ["admin", "fatima", "Aliza", "Amjad", "Noor"]

let current_users_lower : string [] =current_users.map(user => user.toLocaleLowerCase());

for (let new_user of new_users) {
    if (current_users_lower.indexOf (new_user.toLocaleUpperCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
    } else {
        console.log(`Yes ${new_user}, is still in available list`)
    }
}