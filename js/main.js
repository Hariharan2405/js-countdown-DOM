var date=new Date("january 01 2024 00:00");
		var d=document.querySelector(".day");
		var h=document.querySelector(".hour");
		var m=document.querySelector(".minute");
		var s=document.querySelector(".second");
		function timer(){
		var date1=new Date();
		var tms=date.getTime()-date1.getTime();
		var seconds=Math.trunc(tms/1000);
		var minutes=Math.trunc(tms/(1000*60));
		var hours=Math.trunc(tms/(1000*60*60));
		var days=Math.trunc(tms/(1000*60*60*24));
		
		var hour=Math.trunc(tms/(1000*60*60)-(days*24));
		var minute=Math.trunc(tms/(1000*60)-(hours*60));
		var second=Math.trunc(tms/1000-(minutes*60));
		
		d.innerText=days;
		h.innerText=hour;
		m.innerText=minute;
		s.innerText=second;
		}
		setInterval(timer,1000)