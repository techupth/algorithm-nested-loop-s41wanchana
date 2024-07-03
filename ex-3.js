// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += j * i + "\t";
    }
    result += row + "\n";
  }
  return result;
}

console.log(multiplicationTable(5));
