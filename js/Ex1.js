/**
 * khối 1: Nhập vào 3 số nguyên
 * 
 * 
 * Khối 2: 
 * 
 * B1: Tạo 3 biến lần lượt cho 3 số firstNum, secondNum, thirdNum;
 * 
 * B2: Viết lệnh if cho từng trường hợp để tìm ra số lớn nhât
 *      if (firstNum > secondNum && firstNum > thirdNum)
 *      else if (secondNum > firstNum && secondNum > thirdNum)
 *      else if (thirdNum > firstNum && thirdNum > secondNum)
 * 
 * B3: In kết quả
 * 
 * 
 * Khối 3: In kết quả số lớn nhất
 */




var btnGo = document.getElementById("btnGo");
btnGo.onclick = function(e){
    e.preventDefault();
    var firstNum = parseFloat(document.getElementById("inputFN").value);
    var secondNum = parseFloat(document.getElementById("inputSN").value);
    var thirdNum = parseFloat(document.getElementById("inputTN").value);

    var result = document.getElementById("txtResult");

    if (firstNum < secondNum && secondNum < thirdNum) {
        result.innerHTML = "3 so tu be den lon la: " + firstNum + secondNum + thirdNum;
    }
    else if (secondNum < firstNum && secondNum < thirdNum) {
        result.innerHTML = "3 so tu be den lon la: " + secondNum + firstNum + thirdNum;
    }
    else if (thirdNum < secondNum && thirdNum < firstNum) {
        result.innerHTML = "3 so tu be den lon la: " + thirdNum + secondNum + firstNum;
    }
       
}
