let elements = ["fire", "water", "electricity", "ground", "wind", "arcane"];


window.addEventListener("click", (e) => {
    switch (e) {
    case 1:
        console.log("vuur");
        break;
    case 2:
        console.log("water");
        break;
    case 3:
        console.log("electricity");
        break;
    case 4:
        console.log("ground");
        break;
    case 5:
        console.log("wind");
        break;
    case 6:
        console.log("arcane");
        break;
    default:
        console.log("But I believe Aang can save the world.");
        break;
    }
});