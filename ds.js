// ! an exercise i did during a coding interview

let initial = "abc".split("");
const arr = ["INSERT 1 a", "INSERT 3 b", "INSERT 5 c", "DELETE 0", "DELETE 0", "DELETE 0"];
const arrLength = arr.length;

arr.map(item => {
    const command = item.split(" ")[0];
    const position = parseInt(item.split(" ")[1]);
    const value = item.split(" ")[2];

    if (command === "INSERT") {
        initial.splice(position, 0, value);
    } else if (command === "DELETE") {
        initial.splice(position, 1);
    }

    console.log(initial);
});