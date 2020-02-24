let text = "";
for (let i = 1; i < 10; i++){
    text += "<tr>";
    for (let j = 2; j < 10; j++){
        text += "<td>" + j + "x" + i + "=" + j * i;
    }
    text += "</tr>";
}
document.getElementById("table").innerHTML = text;