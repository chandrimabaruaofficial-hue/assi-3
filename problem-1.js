
//problem 1

var area = 800;
let eachGets = area / 2;

console.log(`Rohim ,Karim protteke pabe ${eachGets} ongsho`);



//problem 2

var money = 10000;

if (money >= 25000) {
    console.log('laptop ');

}
else if (money >= 10000) {
    console.log('cycle ');

}
else {
    console.log('chocolate');

}


//problem 3

var lastDay = 11;

for (let day = 1; day <= lastDay; day++) {

    if (((day - 1) % 3) === 0) {

        console.log(` ${day}: medicine khabe `);

    }

    else {

        console.log(` ${day}: medicine khabe na `);

    }
}

//problem 4

var fileName = "pdfData.jpg";

if (fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
    console.log("store");

} else {
    console.log("delete");

}


//problem 5

var student =
{
    name: "jankar",
    roll: 1014,
    department: "cse"
};

let generateEmail = `${student.name}${student.roll}.${student.department}@ph.ac.bd`;

console.log(generateEmail);






// problem 6

var experience = 30;
var startingSalary = 45000;

let currentSalary = startingSalary;

for (let i = 1; i <= experience; i++) {
    currentSalary = currentSalary + (currentSalary * 0.05);

}

console.log(`${currentSalary.toFixed(2)}`);
