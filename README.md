<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>预测计算器</title>
<style>
body { font-family: Arial; text-align: center; padding: 20px; }
input { width: 60px; margin: 5px; padding: 5px; }
button { padding: 10px 20px; margin-top: 10px; }
.result { margin-top: 20px; font-size: 20px; }
</style>
</head>

<body>

<h2>📱 V4预测计算器</h2>

<p>当前号码：</p>
<input id="a" placeholder="a">
<input id="b" placeholder="b">
<input id="c" placeholder="c">

<p>期号p：</p>
<input id="p" placeholder="p">

<p>上一期：</p>
<input id="ap" placeholder="a₁">
<input id="bp" placeholder="b₁">
<input id="cp" placeholder="c₁">

<br>
<button onclick="calc()">计算</button>

<div class="result" id="result"></div>

<script>
function calc() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let c = +document.getElementById("c").value;
  let p = +document.getElementById("p").value;
  let ap = +document.getElementById("ap").value;
  let bp = +document.getElementById("bp").value;
  let cp = +document.getElementById("cp").value;

  let F1 = a + c - b;
  let F2 = a + b + c;
  let F3 = p * (a + b + c);
  let F4 = Math.abs(a-ap)+Math.abs(b-bp)+Math.abs(c-cp);

  let total = F1 + F2 + F3 + F4;

  let final = total % 27;

  let size = final >= 14 ? "大" : "小";
  let oddEven = final % 2 === 1 ? "单" : "双";

  document.getElementById("result").innerHTML =
    "FINAL = " + final + "<br>" +
    "结果：" + size + oddEven;
}
</script>

</body>
</html>
