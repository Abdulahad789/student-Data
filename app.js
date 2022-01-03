var student = {
    rollnumber : "1",
    name: "Abdul ahad",
    fatherName: "Muhammad Alam",
    age: "18",
    contact:"03490257503"
};

var student2 = {
    rollnumber : "2",
    name: "Abdul Rehamn",
    fatherName: "Muhammad Ibrahim",
    age: "20",
    contact:"03490257503"
};

var student3 = {
    rollnumber : "3",
    name: "Abdul Salam",
    fatherName: "Abdul Jbar",
    age: "20",
    contact:"03490257503"
};

var student4 = {
    rollnumber : "4",
    name: "Saifullah",
    fatherName: "Muhammad Youns",
    age: "19",
    contact:"03490257503"
};

var student5 = {
    rollnumber : "5",
    name: "Ubaidulla",
    fatherName: "Muhammad Riaz",
    age: "20",
    contact:"03490257503"

}; 

var studentlist = [student,student2,student3,student4,student5]
 var studentdata = document.getElementById("studentdata")
 for(i = 0; i < studentlist.length; i++){
 var obj = studentlist[i]
 studentdata.innerHTML += "<tr><td>"+ obj.rollnumber +"</td><td>"+ obj.name + "</td><td>"+ obj.fatherName +"</td><td>"+ obj.age +"</td><td>"+ obj.contact+"</td></tr>";
 }
function studentSearch(){

var inpval = document.getElementById('inpval')
    var showrollnumber = document.getElementById("showRollnumber")
    var showName = document.getElementById("showName")
    var showFatherName = document.getElementById("showFatherName")
    var showAge = document.getElementById("showAge")
    var showContact = document.getElementById("showContact")
    
    for(var i = 0; i < studentlist.length; i++){
        var std = studentlist[i];
        if(inpval.value == std.rollnumber){
           
            showrollnumber.innerHTML = std.rollnumber;
            showName.innerHTML=std.name;
            showFatherName.innerHTML=std.fatherName;
            showAge.innerHTML = std.age;
            showContact.innerHTML=std.contact
        }
    }
    
}






// student.Name = "ahad"
// console.log(student,student2,student3,student4,student5)


