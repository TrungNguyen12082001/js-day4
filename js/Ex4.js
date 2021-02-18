/**
 * Khối 1: Nhập 3 cạnh của tam giác để kiểm tra
 * 
 * Khối 2: 
 * B1: Tạo 3 biến tương ứng cho 3 cạnh mà mình muốn xét
 * B2: Viết điều kiện cho từng loại tam giác để kiểm tra
 * B3: In kết quả
 * 
 * Khối 3: In kết quả tam giác (nếu thỏa mãn điều kiện!)
 */




var btnKiemTra = document.getElementById("btnKiemTra");
btnKiemTra.onclick = function(e){
    e.preventDefault();
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    var c = document.getElementById("inputC").value;
    
    var kiemTra = document.getElementById("txtKQ");

    if (a+b>c || b+c>a || a+c>b){
        kiemTra.innerHTML = "Tam giác bình thường!"
    }

    if (a==b && a==c && b==c){
        kiemTra.innerHTML = "Tam giác đều!";
    }else if (a==b || a==c || b==c){
        kiemTra.innerHTML = "Tam giác cân!";
    }else if (a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b){
        kiemTra.innerHTML = "Tam giác vuông!";
    }else {
        kiemTra.innerHTML = "Không phải tam giác!"
    }
}