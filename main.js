name_of_the_student_array = [] ;
function submit() {
    var display_student_array = [] ;
    for (var j=1; j<=4; j++){
        var name_of_the_student_array=document.getElementsByTagid(" name_of_the_student_"+j).value ;
        console.log(name_of_the_student);
        name_of_the_student_1.push(name_of_the_student);
       
    }
    console.log(name_of_the_student_array)
    var length_of_the_array = name_of_the_student_array.length ;
    console.log(length_of_the_array)
    for (var k=0; k<length_of_the_array; k++){
        display_student_array.push("<h4>NAME-"+name_of_the_student_array[k]+"<h4>");
        console.log(length_of_the_array;
    }
    console.log(length_of_the_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
       document.getElementById("submit_button").style.display="none";


}