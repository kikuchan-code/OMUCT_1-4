
Quiz = "H";
Answer1 = "水素";
Answer2 = "酸素";
Answer3 = "窒素";
CollectAnswer = Answer1;

// document.write(Quiz);
document.getElementById("Q").innerHTML=Quiz;
document.write("<br>")
document.write("1." + Answer1)
document.write("<br>")
document.write("2." + Answer2)
document.write("<br>")
document.write("3." + Answer3)
document.write("<br>")
// document.write("<button type='button' onclick='Answer1_check()'>1</button>");
// document.write("<button type='button' onclick='Answer2_check()'>2</button>");
// document.write("<button type='button' onclick='Answer3_check()'>3</button>");
document.write("<br>")
let Answer;



function Answer1_check() {
    Answer = Answer1;
    Decision();
}

function Answer2_check() {
    Answer = Answer2
    Decision();
}

function Answer3_check() {
    Answer = Answer3
    Decision();
}

function Decision() {
    if (Answer == CollectAnswer) {
        alert("正解!")
    } else {
        alert("不正解…")
    }
}
