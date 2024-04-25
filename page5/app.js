let result = prompt("Son kiriting");
let random = Math.floor(Math.random() * 10);

if(result == random) {
    document.write("Yutdingiz ");
}
else {
     document.write("Yutqizdiz ");
}
document.write(random)