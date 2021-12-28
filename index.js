//document.addEventListener('mousedown',onMouseDown)
//document.addEventListener('mouseup', onMouseUp)
createPlayer();

function unLockSelect() {
    lock = true;
}

function lockSelect() {
    lock = false;
}

function createPlayer(
    x = Math.floor(Math.random() * (600 - 100) + 100),
    y = Math.floor(Math.random() * (600 - 100) + 100)
) {
    const div_main = document.createElement("div");
    div_main.classList.add("first_div_class");
    objField.append(div_main);

    div_main.style.top = y + "px";
    div_main.style.left = x + "px";
    div_main.style.height = height_gen + "px";
    div_main.style.width = width_gen + "px";
    div_main.style.backgroundColor = document.getElementById("color_in").value;

    block.push({
        height: height_gen,
        width: width_gen,
        top: y,
        left: x,
    });
    return div_main;
}
