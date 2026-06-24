export{};
let status: string = "ปกติ";
let payment: number = 10000;
console.log(`สถานะ: ${status}`);
console.log(`ยอดชำระ: ${payment} บาท`);

if (status === "ปกติ" && payment >= 5000) {
    console.log("คุณสามารถซื้อสินค้าได้");
} else if (status === "ปกติ" && payment <= 5000) {
    console.log("ท่านได้รับเพิ่มวงเงืน");
} else {
    console.log("บัตรของท่านถูกระงับการใช้งาน");
}