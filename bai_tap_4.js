function click1() {
    let ten1 = document.getElementById("1").value;
    let ten2 =document.getElementById("2").value;
    alert(ten1 +" và "+ ten2)
}
function click2() {
    let ten1 = +document.getElementById("1").value;
    let ten2 = +document.getElementById("2").value;
    let tong = ten2 + ten1 ;
    alert(tong)

}