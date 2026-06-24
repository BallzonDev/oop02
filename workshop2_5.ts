let products: [string, number, number][] = [
    ["Laptop", 1500, 5],
    ["Mouse", 25, 50],
    ["Keyboard", 45, 30]
];

for (let product of products) {
    console.log(`Product: ${product[0]}, Price: $${product[1]}, Quantity: ${product[2]}`);
}