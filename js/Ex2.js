var btnXacNhan = document.getElementById("btnXacNhan");
btnXacNhan.onclick = function(e){
    e.preventDefault();
    var user = document.getElementById("inputUser").value;
    var bo = document.getElementById("inputBo").value;
    var me = document.getElementById("inputMe").value;
    var conTrai = document.getElementById("inputConTrai").value;
    var conGai = document.getElementById("inputConGai").value;
    var nguoiLa = document.getElementById("inputNguoiLa").value;

    if (user == bo){
        document.getElementById("ketQua").innerHTML = "Chào ông chủ!"
    }else if (user == me){
        document.getElementById("ketQua").innerHTML = "Chào bà chủ!"
    }else if (user == conTrai) {
        document.getElementById("ketQua").innerHTML = "Chào cậu chủ!"
    }else if (user == conGai) {
        document.getElementById("ketQua").innerHTML = "Chào cô chủ!"
    }else if (user == nguoiLa) {
        document.getElementById("ketQua").innerHTML = "Chào cô chủ!"
    }else {
        document.getElementById("ketQua").innerHTML = "Vui lòng chọn đối tượng sử dụng!"
    }
}