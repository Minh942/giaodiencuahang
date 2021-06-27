//các xử lí ịch bản cho Index.html - main.js

//Khai báo biến global
var def = "--Từ khóa--";
var emp = "";

function setFirstTime(fn){
	//Tham chiếu đối tượng nhập từ khóa
	//window.document.frmSearch.txtKeyword.value=def;
	//var fn = window.document.forms[1];
	
	fn.txtKeyword.value = def;
}
function setKeyword(fn, isClick){
	//Lấy ra giá trị của từ khóa 
	var value = fn.txtKeyword.value;
	
	if(isClick){
		//Khi click chuột vào
		if(value.trim()==def){
			fn.txtKeyword.value = emp;
		}
	}else{
		//Khi thoát chuột ra
		if(value.trim()==emp){
			fn.txtKeyword.value  =def;
		}
	}
}

function checkValidKeyword(fn){
	
	var value = fn.txtKeyword.value;
	
	value = value.trim();
	
	if((value==def) || (value==emp)){
		var message = "Hãy nhập vào từ khóa tìm kiếm";
		window.alert(message);
		fn.txtKeyword.focus();
		fn.txtKeyword.select();
		return false;
	}
	return true;
}