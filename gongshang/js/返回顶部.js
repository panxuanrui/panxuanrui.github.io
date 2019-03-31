window.onscroll=function(){
	var fh=document.getElementById("fanhui")
	var top=document.documentElement.scrollTop||document.body.scrollTop;
	var height=document.documentElement.clientHeight||document.body.clientHeight;
	if(top>height){
		fh.style.display="block"
	}else{
		fh.style.display="none"
	}
	fh.onclick=function(){
		document.documentElement.scrollTop=0
		document.body.scrollTop=0
	}
}
	
	
