// Questoin 1
var studentName = [];
// Question 2
var name =["khalid","rafiq","farooq","safeer"];
// Question 3
var age = [18,19,23,21];
// Question 4
var loggedIn = [true,true,true,true];
// Question 5
var student = ["Azeem",23,true];
// Question 6
document.write("<h1>Qualifications :</h1>");
let qualifications = [
    "HSC"+"<br>"+
    "SSC"+"<br>"+
    "BCS"+"<br>"+
    "BS"+"<br>"+
    "BCOM"+"<br>"+
    "MS"+"<br>"+
    "MPHIL"+"<br>"+
    "PhD"+"<br>"
];
document.write(qualifications);
document.write("<br>");
document.write("<br>");
document.write("<h1>Score :</h1>");

// Question 7
var studentsName = ["Kaleem","Jamal","Faizan"];
var score = [320,230,480];
var percA = score[0]/500*100;
var percB = score[1]/500*100;
var percC = score[2]/500*100;

document.write(`Score of ${studentsName[0]} is ${score[0]}: percentage is : ${percA}%`);
document.write("<br>");
document.write(`Score of ${studentsName[1]} is ${score[1]}: percentage is : ${percB}%`);
document.write("<br>");
document.write(`Score of ${studentsName[2]} is ${score[2]}: percentage is : ${percC}%`);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<h1>Sorting method</h1>");
// Question 10 

var student_scores = [34,89,2,48,40,]
student_scores.sort();
document.write(student_scores);

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<h1>Cities</h1>");

// Question 11

var cities = [
    "Karachi, ",
    "Lahore, ",
    "Islamabad ",
    "Kashmir ",
    "Nawabshah, ",
    "Multan ",
    "Rahim Yar Khan,",
    "Bahawalpur ",
    "sukkur ",
    "Hyderabad "
];
document.write("Selected Cities :" + "<br>")
document.write(cities[0] ,cities[1] ,cities[4] ,cities[6])

document.write("<br><br>");
document.write("<br><br>");
document.write("<h1>Join method</h1>")
// Question 12
var jn =["this","is","the","learning","process","of","javascript"];
var add =jn.join("_");
document.write(add);
document.write("<br>");
document.write("<br>");
// Question 13
document.write("<h1>First in First out method</h1>");

var device = ["saddam","rafiq","hamza","umair","junaid","qasim"];

device.shift();
document.write(device + "<br><br>");
device.unshift("Siddique");
document.write(device + "<br><br>");

// Question 14
document.write("<h1>Last in  First out method</h1>");

var name_s = ["saddam","rafiq","hamza","umair","junaid","qasim"];

name_s.pop();
document.write(name_s + "<br><br>");
name_s.push("Siddique");
document.write(name_s + "<br><br>");

