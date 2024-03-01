// Question no 42

function show_magicians(magicians: string[]): void {

    for (const magacian of magicians) {
        console.log(magacian.charAt(0).toUpperCase() + magacian.slice(1));
    }
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ` the great`
    }
}


const magicians2: string[] = ["Munazzah", "Mahnoor", "Fazila"];
make_great(magicians2);
show_magicians(magicians2);


// Question number 43

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i]) + ` the great`;
    } return greatMagicians;
}

const magicians3: string[] = ["usama", "Haseeb", "wajahat"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
