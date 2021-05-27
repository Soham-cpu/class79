name_of_the_students =[];

function submit(){
    var name1= document.getElementById("NameStudent1").value;
    var name2= document.getElementById("NameStudent2").value;
    var name3= document.getElementById("NameStudent3").value;
    var name4= document.getElementById("NameStudent4").value;

    name_of_the_students.push(name1);
    name_of_the_students.push(name2);
    name_of_the_students.push(name3);
    name_of_the_students.push(name4);

    console.log(name_of_the_students);
    document.getElementById("display_name").innerHTML =name_of_the_students;
    document.getElementById("Sumbitbutton").style.display="none";
    document.getElementById("ButtonSort").style.display="inline-block";
}
function sorting(){
    name_of_the_students.sort();
    console.log(name_of_the_students);
    document.getElementById("display_name").innerHTML=name_of_the_students;
}