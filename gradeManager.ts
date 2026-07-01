export type StudentTuple = [string, number];

export const students: StudentTuple[] = [
    ["Alice", 85],
    ["Bob", 72],
    ["Charlie", 60],
    ["Diana", 92]
];

export function getGrade(score: number): string {
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else {
        return "F";
    }
}

export function printGradeReport(studentList: StudentTuple[] = students): void {
    for (const [name, score] of studentList) {
        console.log(`${name} received ${score} and grade ${getGrade(score)}`);
    }
}
