function throw_dice() {
    var arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
    var index1 = 0, index2 = 0;

    index1 = Math.round(Math.random() * (arr.length - 1))
    document.getElementById("dice1").src = arr[index1];
    index1++;

    index2 = Math.round(Math.random() * (arr.length - 1))
    document.getElementById("dice2").src = arr[index2];
    index2++;

    var first_dice_value = index1;
    var second_var_value = index2;
    if (index1 > index2) {
        document.getElementById("result").innerHTML = "🚩Player 1 wins";
    }
    else if (index2 > index1) {
        document.getElementById("result").innerHTML = "Player 2 wins🚩";
    }
    else {
        document.getElementById("result").innerHTML = "Draw";
    }
}

