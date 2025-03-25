let grades = [];
let response;

console.log("Hello Welcome to the GPA Calculator")
alert("Hello Welcome to the GPA Calculator")
console.log("Would You Like to Calculate Your GPA?");
response = prompt("Would You Like to Calculate Your GPA Please respond with yes or no ");
console.log("User entered:" + response);

if (response == "yes"){
	calculateGPA (grades);
}
else 
	if (response =="no"){
	console.log("Have A Good Day");
}

 else{
console.log("Sorry " + response +" is not accepted");
}

function calculateGPA(array) {
    let numOfGrades = parseInt(prompt("Enter the number of subjects:"));

    for (let i = 1; i <= numOfGrades; i++) {
        let grade = Math.round((prompt("Enter the grade for each subject")));
		
		if(grade>=90){
		grade = 4.0;
		}
		else if(grade>=80){
		grade = 3.0;
		}
		else if(grade>=70){
		grade = 2.0;
		}
		else if(grade>=60) {
		grade = 1.0;
		}
		else{
		grade = 0.0;
		}
        array.push(grade);
    }

   let total=0;
		for (let element of array){
		 total = total + element;
		}
    let gpa = total / array.length;

    console.log("Your GPA is: " + gpa);
	alert("Your GPA is: " + gpa);
}


