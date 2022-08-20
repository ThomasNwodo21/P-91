player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById('student1_name').innerHTML = student1_name + " : ";
document.getElementById('student2_name').innerHTML = student2_name + " : ";

document.getElementById('student1_score').innerHTML = student1_score;
document.getElementById('student2_score').innerHTML = student2_score;

document.getElementById('student_question').innerHTML = "Question Turn -" + student1_name;
document.getElementById('student_answer').innerHTML = "Answer Turn -" + student2_name;

function send()
{
    get_number = document.getElementById('number').value;
    console.log('Number input =' + number)

    question_number = "<h4 id='number_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <imput type='text' id=' input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}