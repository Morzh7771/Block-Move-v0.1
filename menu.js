
function RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
}

function myFunction() {
    if (openMenu == false) {
        openMenu = true;

        document.getElementById("myDropdown").classList.toggle("show");

        document.getElementById("width_inputs").value = parseInt(
            objField.children[selected_num].style.width
        );
        document.getElementById("height_inputs").value = parseInt(
            objField.children[selected_num].style.height
        );

        width_in.textContent = "Ширина: " + parseInt(objField.children[selected_num].style.width);
        height_in.textContent = "Высота: " + parseInt(objField.children[selected_num].style.height);

        hex = RGBToHex(objField.children[selected_num].style.backgroundColor);

        document.getElementById("color_in").value = hex;
        document.getElementById("dropbtnid").style.borderRadius = "0px 5px 0px 0px";
    } else {
        openMenu = false;
        var dropdowns = document.getElementsByClassName("dropdowncontent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
        document.getElementById("dropbtnid").style.borderRadius = "0px 5px 5px 5px";
    }
}

function sizePic() {
    width_in.textContent =
        "Ширина: " + document.getElementById("width_inputs").value;
    height_in.textContent =
        "Высота: " + document.getElementById("height_inputs").value;

    height_gen = parseInt(document.getElementById("height_inputs").value);
    width_gen = parseInt(document.getElementById("width_inputs").value);

    setNewSize();
}

function setNewSize() {
    objField.children[selected_num].style.height = height_gen + "px";
    objField.children[selected_num].style.width = width_gen + "px";
    objField.children[selected_num].style.backgroundColor =
        document.getElementById("color_in").value;

    block.splice(selected_num, 1);
    block.splice(selected_num, 0, {
        height: objField.children[selected_num].style.height,
        width: objField.children[selected_num].style.width,
        top: objField.children[selected_num].style.top,
        left: objField.children[selected_num].style.left,
    });
}