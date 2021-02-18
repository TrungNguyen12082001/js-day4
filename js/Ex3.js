/**
 * Khối 1: Nhập vào 3 số nguyên
 * 
 * Khối 2: 
 * B1: Tạo 3 biến lần lượt cho 3 số nguyên soNguyen1, soNguyen2 và soNguyen3
 * B2: Viết điều kiện để tìm số chẵn và số lẻ
 * B3: In kết quả     
 * 
 * Khối 3: In kết quả số chẵn và số lẻ
 */




var btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function(e){
    e.preventDefault();
    var soNguyen1 = document.getElementById("inputSN1").value;
    var soNguyen2 = document.getElementById("inputSN2").value;
    var soNguyen3 = document.getElementById("inputSN3").value;

    var ketQua = document.getElementById("txtTB");
    
    if (soNguyen1 % 2 == 0 && soNguyen2 % 2 != 0 && soNguyen3 % 2 != 0) {
        ketQua.innerHTML = "So chan la: " + soNguyen1 + "<br> So le la: " + soNguyen2 + soNguyen3;
    }else if (soNguyen2 % 2 == 0 && soNguyen1 % 2 != 0 && soNguyen3 % 2 != 0) {
        ketQua.innerHTML = "So chan la: " + soNguyen2 + "<br> So le la: " + soNguyen1 + soNguyen3;
    }else if (soNguyen3 % 2 == 0 && soNguyen1 % 2 != 0 && soNguyen2 % 2 != 0) {
        ketQua.innerHTML = "So chan la: " + soNguyen3 + "<br> So le la: " + soNguyen1 + soNguyen2;
    }else if (soNguyen1 % 2 == 0 && soNguyen2 % 2 == 0 && soNguyen3 % 2 ==0) {
        ketQua.innerHTML = "So chan la: " + soNguyen1 + soNguyen2 + soNguyen3;
    }else if (soNguyen1 % 2 != 0 && soNguyen2 % 2 != 0 && soNguyen3 % 2 !=0) {
        ketQua.innerHTML = "So le la: " + soNguyen1 + soNguyen2 + soNguyen3;
    }else if (soNguyen1 % 2 == 0 && soNguyen2 % 2 != 0 && soNguyen3 % 2 == 0){
        ketQua.innerHTML = "So chan la: " + soNguyen1 + soNguyen3 + "<br> So le la: " + soNguyen2;
    }else if (soNguyen1 % 2 == 0 && soNguyen2 % 2 == 0 && soNguyen3 % 2 != 0){
        ketQua.innerHTML = "So chan la: " + soNguyen1 + soNguyen2 + "<br> So le la: " + soNguyen3;
    }

}