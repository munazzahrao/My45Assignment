// Question No 32
var current_users = ["admin", "Eric", "Ali", "hamza", "Fazila"];
var new_users = ["admin", "fatima", "Aliza", "Amjad", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLocaleLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.indexOf(new_user.toLocaleUpperCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ", is still in available list"));
    }
}
