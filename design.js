let count=1;
handleFunction=()=>{
    var n = document.getElementById("n").value;
    var col = document.getElementById("colorpicker").value;
    for(let i=1;i<=n;i++){
        var ans = document.getElementById("answer");
        var shape = document.createElement("div");
        if(document.getElementById("c").checked){
            shape.classList.add("circle");
        }
        else if(document.getElementById("s").checked){
            shape.classList.add("square");
        }
        else if(document.getElementById("r").checked){
            shape.classList.add("rectangle");
        }
        else{
            shape.add("Invalid Input");
        }
        shape.innerHTML+=count;
        shape.style.backgroundColor = col;
        ans.appendChild(shape);
        count++;
    }
}