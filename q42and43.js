// Question no 42
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magacian = magicians_1[_i];
        console.log(magacian.charAt(0).toUpperCase() + magacian.slice(1));
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
var magicians2 = ["Munazzah", "Mahnoor", "Fazila"];
make_great(magicians2);
show_magicians(magicians2);
// Question number 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i]) + " the great";
    }
    return greatMagicians;
}
var magicians3 = ["usama", "Haseeb", "wajahat"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
