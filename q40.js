// Question  no 40
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("Hamza", "light");
console.log(album);
album = makeAlbum("Shahid", "red wave");
console.log(album);
album = makeAlbum("Ali", "seenbreez");
console.log(album);
