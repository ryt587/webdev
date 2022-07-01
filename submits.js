var formData = location.search;
formData = formData.substring(1, formData.length);
while (formData.indexOf("+") != -1) {
	formData = formData.replace("+", " ");
}
formData = unescape(formData);
var formArray = formData.split("&");
var para=new Array();

for (var i=0; i < formArray.length; ++i) {
	
	para=formArray[i].split("=");
	
	switch (para[0]) {
	    case "color": 
			document.body.style.setProperty('background-color', para[1], 'important');
		case "font":
			var font;
			if (para[1]=== "Arial"){
				font='Arial, Helvetica, sans-serif';
			}else if (para[1]=== "Courier New"){
				font="'Courier New', Courier, monospace";
			}else if (para[1]==="Times New Roman"){
				font="'Times New Roman', Times, serif";
			}else if (para[1]==="Sans serif"){
				font="sans-serif";
			}else if (para[1]==="Verdana"){
				font="Verdana, Geneva, Tahoma, sans-serif";
			}else if (para[1]==="Franklin Gothic Medium"){
				font="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serife";
			}else if (para[1]==="Gill Sans"){
				font="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
			}else if (para[1]==="Segoe UI"){
				font="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
			}else if (para[1]==="Lucida Sans"){
				font="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
			}else if (para[1]==="Trebuchet MS"){
				font="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
			}else if (para[1]=== "Georgia"){
				font="Georgia, 'Times New Roman', Times, serif";
			}else if (para[1]==="Arial Narrow Bold"){
				font="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
			}
			document.body.style.fontFamily=font
    }
	
}