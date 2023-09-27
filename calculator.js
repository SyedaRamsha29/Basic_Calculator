function display(x) {
  document.getElementById("result").value += x;
}
function cal() {
  document.getElementById("result").value = eval(
    document.getElementById("result").value
  );
}
function clr() {
  document.getElementById("result").value = "";
}
function del() {
  let a = document.getElementById("result").value;
  console.log(a);
  document.getElementById("result").value = a.slice(0, -1);
}
