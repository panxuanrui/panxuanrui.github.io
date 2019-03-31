var span=document.getElementsByTagName("span")
var time=function(){
	var da=new Date()
	var now=new Date("3 31 2019,20:00:00")
	var cha=now-da;
	var tian=parseInt(cha/86400000)
	var shi=parseInt(cha%86400000/3600000)
	var fen=parseInt(cha%86400000%3600000/60000)
	var miao=parseInt(cha%86400000%3600000%60000/1000)
	span[0].innerHTML=tian
	span[1].innerHTML=shi
	span[2].innerHTML=fen
	span[3].innerHTML=miao
}
time()
setInterval(time,1000)
