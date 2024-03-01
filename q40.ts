// Question  no 40

function makeAlbum (artist: string, title: string): {artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}

let album = makeAlbum("Hamza", "light")
console.log(album)

album = makeAlbum("Shahid", "red wave")
console.log(album)

album = makeAlbum("Ali", "seenbreez")
console.log(album);
