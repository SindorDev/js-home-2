let overall = Number(prompt("Enter Overall"));
let score = Number(prompt("Enter score"));
let learning = Number(prompt("Enter learning"));
let speaking = Number(prompt("Enter speaking"));

let result = Math.floor((overall + score + learning + speaking) /4);

document.write(result)