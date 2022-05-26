var count = 1;

function fill(control) {
    if (checkWin()) {
        alert("Winner");
        reset();
    } else {
        if (count <= 9) {
            if (count % 2 != 0) {
                document.getElementById(control.id).innerHTML = "X";
            } else {
                document.getElementById(control.id).innerHTML = "0";
            }
            count++;
        } else {
            alert("match draw");
            reset();
        }
    }
}

function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("tile" + i).innerHTML = "";
    }
    count = 1;
}

function checkWin() {
    if (
        checkCondition("tile1", "tile2", "tile3") ||
        checkCondition("tile4", "tile5", "tile6") ||
        checkCondition("tile7", "tile8", "tile9") ||
        checkCondition("tile1", "tile4", "tile7") ||
        checkCondition("tile2", "tile5", "tile8") ||
        checkCondition("tile3", "tile6", "tile9") ||
        checkCondition("tile1", "tile5", "tile9") ||
        checkCondition("tile3", "tile5", "tile7")
    ) {
        return true;
    }
}

function checkCondition(tile1, tile2, tile3) {
    if (
        getData(tile1) != "" &&
        getData(tile2) != "" &&
        getData(tile3) &&
        getData(tile1) == getData(tile2) &&
        getData(tile2) == getData(tile3)
    ) {
        return true;
    }
}

function getData(tile) {
    return document.getElementById(tile).innerHTML;
}