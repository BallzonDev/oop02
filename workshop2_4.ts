let scores: number[] = [85, 90, 78, 92, 88];
let student: [number, string] = [1, "John Doe"];

console.log(`Student ID: ${student[0]}, Name: ${student[1]}`);

let totalScore: number = 0;
for (let i = 0; i < scores.length; i++) {
    console.log(`Test ${i + 1} Score: ${scores[i]}`);
    totalScore += scores[i];
}

let averageScore: number = totalScore / scores.length;
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore.toFixed(1)}`);