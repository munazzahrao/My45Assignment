// Question no 41

function show_magicians(magicians: string[]): void {

    for (const magacian of magicians) {
        console.log(magacian.charAt(0).toUpperCase() + magacian.slice(1));
    }
}

const magacian: string[] = ["Ali", "Hamza", "Bilal"];
show_magicians(magacian);
