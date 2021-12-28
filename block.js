function listener() {
    if (listener_num >= block.length) {
        listener_num = 0;
    }
    listener_height = block[listener_num].height;
    listener_width = block[listener_num].width;
    listener_top = block[listener_num].top;
    listener_left = block[listener_num].left;

    if (
        parseInt(listener_top) <= mouse_y &&
        parseInt(listener_height) + parseInt(listener_top) >= mouse_y &&
        parseInt(listener_left) <= mouse_x &&
        parseInt(listener_width) + parseInt(listener_left) >= mouse_x
    ) {
        if (lock == true) {
            selected_num = listener_num;

            document.getElementById("width_inputs").value = parseInt(
                objField.children[selected_num].style.width
            );
            document.getElementById("height_inputs").value = parseInt(
                objField.children[selected_num].style.height
            );

            width_in.textContent =
                "Ширина: " + parseInt(objField.children[selected_num].style.width);
            height_in.textContent =
                "Высота: " + parseInt(objField.children[selected_num].style.height);

            hex = RGBToHex(objField.children[selected_num].style.backgroundColor);
            document.getElementById("color_in").value = hex;

            selectTrue = true;
            selected_height = block[selected_num].height;
            selected_width = block[selected_num].width;
            selected_top = block[selected_num].top;
            selected_left = block[selected_num].left;
        }
        console.log(selected_num);
    } //else if(  parseInt(selected_top) >= mouse_y
    //       || parseInt(selected_height) + parseInt(selected_top) <= mouse_y
    //       || parseInt(selected_left) >= mouse_x
    //      || parseInt(selected_width) + parseInt(selected_left) <= mouse_x){
    //          selected_num = null;
    //          selectTrue = false;
    //      }
    listener_num++;
}
function rngcolor() {
    color = "#" + Math.floor(Math.random() * 16_000_000).toString(16);
    objField.children[selected_num].style.backgroundColor = color;

    height = Math.floor(Math.random() * (100 - 50) + 50);
    width = Math.floor(Math.random() * (100 - 50) + 50);

    objField.children[selected_num].style.height = height + "px";
    objField.children[selected_num].style.width = width + "px";

    block.splice(selected_num, 1);
    block.splice(selected_num, 0, {
        height: objField.children[selected_num].style.height,
        width: objField.children[selected_num].style.width,
        top: objField.children[selected_num].style.top,
        left: objField.children[selected_num].style.left,
    });
}



function moveBlock() {
    if (work === true) {
        objField.children[selected_num].style.left =
            mouse_x -
            parseInt(objField.children[selected_num].style.width) / 2 +
            "px";
        objField.children[selected_num].style.top =
            mouse_y -
            parseInt(objField.children[selected_num].style.height) / 2 +
            "px";

        block.splice(selected_num, 1);
        block.splice(selected_num, 0, {
            height: objField.children[selected_num].style.height,
            width: objField.children[selected_num].style.width,
            top: objField.children[selected_num].style.top,
            left: objField.children[selected_num].style.left,
        });
    }
}

function switch_work() {
    // if(selectTrue == true){
    if (work === true) {
        work = false;
    } else {
        work = true;
        objField.children[selected_num].style.left =
            mouse_x -
            parseInt(objField.children[selected_num].style.width) / 2 +
            "px";
        objField.children[selected_num].style.top =
            mouse_y -
            parseInt(objField.children[selected_num].style.height) / 2 +
            "px";
    }
}