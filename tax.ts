let income: number = 15000;

console.log(`Income: ${income}`);
let yincome: number = income * 12;
console.log(`รายได้ต่อปี: ${yincome} บาท`);

// รายได้ต่อปี น้อยกว่า 100,000 บาท อัตราภาษี 5%
// รายได้ต่อปี = 100,000 - <200,000 บาท อัตราภาษี 7%
// รายได้ต่อปี = 500,000 - 500,000 บาท อัตราภาษี 10%
// รายได้ต่อปี มากกว่าหรือเท่ากับ 500,000 บาท อัตราภาษี 12%
// แสดงผลอัตราภาษี และ ภาษีที่ต้องเสีย
if (yincome < 100000) {
    console.log("อัตราภาษี: 5%");
    let tax: number = yincome * 0.05;
    console.log(`ภาษีที่ต้องเสีย: ${tax} บาท`);
} else if (yincome < 200000) {
    console.log("อัตราภาษี: 7%");
    let tax: number = yincome * 0.07;
    console.log(`ภาษีที่ต้องเสีย: ${tax} บาท`);
} else if (yincome < 500000) {
    console.log("อัตราภาษี: 10%");
    let tax: number = yincome * 0.10;
    console.log(`ภาษีที่ต้องเสีย: ${tax} บาท`);
} else {
    console.log("อัตราภาษี: 12%");
    let tax: number = yincome * 0.12;
    console.log(`ภาษีที่ต้องเสีย: ${tax} บาท`);
}