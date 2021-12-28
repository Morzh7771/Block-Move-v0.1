document.addEventListener("mousemove", mouse_move);
document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

function onKeyDown(e) {
    if (e.key === "Spacebar" || e.keyCode === 32 || e.keyCode === 0) {
        switch_work();
    }
    if (e.key === "z" || e.key === "Z" || e.key === "я" || e.key === "Я") {
        createPlayer();
    }
    if (e.key === "x" || e.key === "X" || e.key === "Ч" || e.key === "ч") {
        rngcolor();
    }
    if (e.key === "c" || e.key === "С" || e.key === "C" || e.key === "с") {
        lockSelect();
    }
    if (e.keyCode === 27) {
        myFunction();
    }
}

function onKeyUp(e) {
    if (e.key === "c" || e.key === "С" || e.key === "C" || e.key === "с") {
        unLockSelect();
    }
}
function mouse_move(event) {
    mouse_x = event.pageX;
    mouse_y = event.pageY;
    //console.log(event); //можно узнать куда наведён
    listener();
    moveBlock();
}