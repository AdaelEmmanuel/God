player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
qu_turn="player1";
ans_turn= "player2";
player1_score=0;
player2_score=0;
document.getElementById("player_qst").innerHTML="Question turn- "+ player1;
document.getElementById("player_ans").innerHTML="Answer turn- "+ player2;
document.getElementById("player1_name").innerHTML=player1;
document.getElementById("player2_name").innerHTML=player2;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
function send() {
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
charAt1=word.charAt(1);
middle=Math.floor(word.length/2);
charAt2=word.charAt(middle)
second_last=word.length-1;
charAt3=word.charAt(second_last);

r_c1=word.replace(charAt1, "_");
r_c2=r_c1.replace(charAt2, "_");
r_c3=r_c2.replace(charAt3, "_");

qw="<h4 id = 'w_d' >q. "+r_c3+"</h4>";
ib="<br> answer- <input type= 'text' id='icb'>";
cb="<br><br> <button class = 'btn btn-info' onclick='check()'>Check</button>";
row=qw+ib+cb;
document.getElementById("output").innerHTML=row;
document.getElementById("word").innerHTML="";
}
function check(){
    get_ans=document.getElementById("icb").value;
    ans=get_ans.toLowerCase();
    if(ans==word){
        if(ans_turn =="player1"){
        player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }
    }
    if(qu_turn=="player1"){
        qu_turn="player2";
        document.getElementById("player_qst").innerHTML="Question Turn- "+player2;
    }
    else{
        qu_turn="player1";
        document.getElementById("player_qst").innerHTML="Question Turn- "+player1;
    }
    if(ans_turn=="player1"){
        ans_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer Turn- "+player2;
    }
    else{
        ans_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer Turn- "+player1;
    }
    document.getElementById("output").innerHTML="";
}