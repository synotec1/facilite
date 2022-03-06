function ec(){
	st = document.f.e.value;
	s = eval(st);
	document.getElementById("h3").innerHTML = s;
	
}

function cal(){
	p = document.f.p.value;
	
	 a = parseInt(0);
     b = parseInt(0);
     c = parseInt(0);
     d = parseInt(0);
     
     lc = 0;

    if (p <= 999){
    	a = Math.round(p*1.05 / 3);
		b =	Math.round(p*1.1 / 6);
		c = Math.round(p*1.15 / 9);
		d = Math.round(p*1.2 / 12);
	}
	else if (p <= 1899){
    	a = Math.round(p*1.04 / 3);
		b =	Math.round(p*1.08 / 6);
		c = Math.round(p*1.12 / 9);
		d = Math.round(p*1.16 / 12);
	}
	else{

    	a = Math.round(p*1.03 / 3);
		b =	Math.round(p*1.06 / 6);
		c = Math.round(p*1.09 / 9);
		d = Math.round(p*1.12 / 12);
	
	}

        lc = "3 mois : " + a + "DT (" + (a*3)  + "DT)" + "\n" + "6 mois : " + b + "DT (" + (b*6)  + "DT)" + "\n" + "9 mois : " + c + "DT (" + (c*9)  + "DT)" +"\n" + "12 mois : " + d + "DT (" + (d*12)  + "DT)";
        lb = "3 mois : " + (Math.round(p/3)) + "DT (" + p + "DT)" + "\n" + "6 mois : " + Math.round(a*3/6) + "DT (" + (Math.round(a*3/6)*6) + "DT)" + "\n" + "9 mois : " + Math.round(b*6/9) + "DT (" + (Math.round(b*6/9)*9)  + "DT)" +"\n" + "12 mois : " + Math.round(c*9/12) + "DT (" + (Math.round(c*9/12)*12)  + "DT)";
       
     	document.f.outc.value = lb;
        document.f.out.value = lc;
     }
