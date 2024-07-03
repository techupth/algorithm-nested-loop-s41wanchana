// เริ่มเขียนโค้ดตรงนี้
function printPattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    result += row + "\n";
  }
  return result;
}

console.log(printPattern(5));
