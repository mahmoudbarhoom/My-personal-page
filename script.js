// تغيير لون الخلفية عند الضغط على الزر
document.getElementById("change-bg").addEventListener("click", function() {
    const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
