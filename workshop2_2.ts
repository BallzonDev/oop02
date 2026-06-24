let score: number = 85;
let grade;

if (score >= 80 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score < 80) {
    grade = "B";
} else if (score >= 60 && score < 70) {
    grade = "C";
} else if (score >= 50 && score < 60) {
    grade = "D";
} else if (score >= 0 && score < 50) {
    grade = "F";
} else {
    console.log("Error: The score must be between 0 and 100.");
}

if (grade) {
    console.log(`--- Grading Result ---`);
    console.log(`Success Case: Score: ${score} | Grade: ${grade}`);
    console.log(`----------------------`);
}