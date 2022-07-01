const color=document.getElementById('color');
const font=document.getElementById('font');
const color_preview=document.getElementById('color-preview');
const font_preview=document.getElementById('font-preview');



function colorchange() {
    var color_value=document.getElementById('color').value;
    color_preview.style.backgroundColor = color_value;
}

function fontchange() { 
    var font_value=document.getElementById('font').value;
    switch (font){
        case "Arial":
            font='Arial, Helvetica, sans-serif';
        case "Courier New":
            font="'Courier New', Courier, monospace";
        case "Times New Roman":
            font="'Times New Roman', Times, serif";
        case "Sans serif":
            font="sans-serif";
        case "Verdana":
            font="Verdana, Geneva, Tahoma, sans-serif";
        case "Franklin Gothic Medium":
            font="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serife";
        case "Gill Sans":
            font="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        case "Segoe UI":
            font="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        case "Lucida Sans":
            font="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
        case "Trebuchet MS":
            font="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
        case "Georgia":
            font="Georgia, 'Times New Roman', Times, serif";
        case "Arial Narrow Bold":
            font="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
    
    }
    font_preview.style.fontFamily = font_value;
}
