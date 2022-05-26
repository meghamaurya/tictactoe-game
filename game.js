var count = 1;

function fill(control) {                                               //it has all control of game
    if (checkWin()) {
        alert("Winner");
        reset();
    } else {
        if (count <= 9) {                                              //we have 9 tile  and take alternate X and 0 for tile
            if (count % 2 != 0) {                                      //check if tile is even then put X
                document.getElementById(control.id).innerHTML = "X";
            } else {                                                   //tile is odd put 0
                document.getElementById(control.id).innerHTML = "0";
            }
            count++;                                                   //every click count is increase till 9
        } else {
            alert("match draw");                                       //no match found then match is declare draw
            reset();                                                   //reset the game
        }
    }
}

function reset() {
    for (var i = 1; i <= 9; i++) {                                     //count reaches to 9, clear all tile
        document.getElementById("tile" + i).innerHTML = "";
    }
    count = 1;                                                         //count start with one
}

function checkWin() {                                                  //check all the possible winning condition
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

function checkCondition(tile1, tile2, tile3) {                         //the logic part
    if (
        getData(tile1) != "" &&
        getData(tile2) != "" &&
        getData(tile3) != "" &&
        getData(tile1) == getData(tile2) &&
        getData(tile2) == getData(tile3)
    ) {
        return true;
    }
}

function getData(tile) {
    return document.getElementById(tile).innerHTML;                    //return the value in tile
}