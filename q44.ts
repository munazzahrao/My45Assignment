// Question no 44

function sandwich(...items: string[]): void {
    console.log("Sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich Munazzah fatima")

sandwich(`capcicum`, `tomato`, `chicken`)
sandwich(`beep`, `cheese`)
sandwich(`garlic chicken`, `mayo sauce`);
