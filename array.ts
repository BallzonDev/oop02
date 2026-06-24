export{};
let student: string[] = ["John", "Jane", "Bob", "Alice", "Tom"];
let mark: number[] = [84, 75, 64, 58, 74];
student.push("Mary");
mark.push(90);
for (let i = 0; i < 6; i++) {
    console.log(`ชื่อ: ${student[i]}, คะแนนสอบครั้งที่ ${i + 1} = ${mark[i]}`);
}
student.pop();
student.forEach((name, index) => {
    console.log(`ชื่อ: ${name}, คะแนนสอบครั้งที่ ${index + 1} = ${mark[index]}`);
});