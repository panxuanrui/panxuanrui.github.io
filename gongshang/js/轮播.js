var slide=document.querySelector(".slide")
function MySlide(obj){
	this.obj=obj
	this.divs=this.obj.getElementsByTagName("div");
	this.lis=this.obj.getElementsByTagName("li")
	this.btns=this.obj.getElementsByTagName("button")
	this.time=null;
	this.num=0;
}
MySlide.prototype={
	constructor:MySlide,
	autoplay:function(){
		clearInterval(this.t)
		this.t=setInterval(this.slide.bind(this),1600)
		return this;
	},
	over:function(){
		this.obj.onmouseover=function(){
			clearInterval(this.t)
		}.bind(this)
		return this;
	},
	out:function(){
		this.obj.onmouseout=function(){
			this.t=setInterval(this.slide.bind(this),1600)
		}.bind(this)
		return this;
	},
	btnclick:function(){
		this.btns[0].onclick=function(){
			this.num--;
			if(this.num<0){this.num=5}
			for(var i=0;i<this.divs.length;i++){
				this.divs[i].style.display="none"
				this.lis[i].style.background=""
			}
			this.divs[this.num].style.display="block"
			this.lis[this.num].style.background="red"
		}.bind(this);
		this.btns[1].onclick=function(){
			this.num++;
			if(this.num>5){this.num=0}
			for(var i=0;i<this.divs.length;i++){
				this.divs[i].style.display="none"
				this.lis[i].style.background=""
			}
			this.divs[this.num].style.display="block"
			this.lis[this.num].style.background="red"
		}.bind(this)	
		return this;
	},
	lisclick:function(){
		var that=this;
		for(var i=0;i<this.lis.length;i++){
			that.lis[i].ind=i
			that.lis[i].onclick=function(){
				for(var j=0;j<that.lis.length;j++){
					that.divs[j].style.display="none"
					that.lis[j].style.background=""
				}
				that.divs[this.ind].style.display="block";
				this.style.background="red";
				that.num=this.ind;
			}
		}
		return this;
	},
	slide:function(){
		this.num++
		if(this.num>5){this.num=0}
		for(var i=0;i<this.divs.length;i++){
			this.divs[i].style.display="none"
			this.lis[i].style.background=""
		}
		this.divs[this.num].style.display="block"
		this.lis[this.num].style.background="red"
	}
}
var lunbo=new MySlide(slide)
lunbo.autoplay().over().out().btnclick().lisclick()
