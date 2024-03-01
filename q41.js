// Question no 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magacian_1 = magicians_1[_i];
        console.log(magacian_1.charAt(0).toUpperCase() + magacian_1.slice(1));
    }
}
var magacian = ["Ali", "Hamza", "Bilal"];
show_magicians(magacian);
