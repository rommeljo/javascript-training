function printStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

let rows = parseInt(prompt("Enter the number of rows:"));


if (isNaN(rows) || rows <= 0) {
    console.log("Please enter a valid number of rows greater than 0.");
} else {

    printStars(rows);
}

