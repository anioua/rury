var cards = ["img/pion","img/poziom","img/krzyz","img/t_gora","img/t_dol","img/t_prawo","img/t_lewo","img/kat_gl","img/kat_gp","img/kat_dl","img/kat_dp","img/pusta"];
var start = [0,10,20,30,40,50,60];
var meta =  [9,19,29,39,49,59,69];

var kierunekLewo = ["img/poziom_mini.jpg","img/krzyz_mini.jpg","img/t_gora_mini.jpg","img/t_dol_mini.jpg","img/t_lewo_mini.jpg","img/kat_gl_mini.jpg","img/kat_dl_mini.jpg","img/pusta_mini.jpg"];
var kierunekPrawo = ["img/poziom_mini.jpg","img/krzyz_mini.jpg","img/t_gora_mini.jpg","img/t_dol_mini.jpg","img/t_prawo_mini.jpg","img/kat_gp_mini.jpg","img/kat_dp_mini.jpg","img/pusta_mini.jpg"];
var kierunekGora = ["img/pion_mini.jpg","img/krzyz_mini.jpg","img/t_gora_mini.jpg","img/t_lewo_mini.jpg","img/t_prawo_mini.jpg","img/kat_gl_mini.jpg","img/kat_gp_mini.jpg","img/pusta_mini.jpg"];
var kierunekDol = ["img/pion_mini.jpg","img/krzyz_mini.jpg","img/t_dol_mini.jpg","img/t_lewo_mini.jpg","img/t_prawo_mini.jpg","img/kat_dl_mini.jpg","img/kat_dp_mini.jpg","img/pusta_mini.jpg"];

var startPrawo = ["img/poziom_mini.jpg","img/krzyz_mini.jpg","img/t_gora_mini.jpg","img/t_dol_mini.jpg","img/t_lewo_mini.jpg"];
var startLewo = ["img/poziom_mini.jpg","img/krzyz_mini.jpg","img/t_gora_mini.jpg","img/t_dol_mini.jpg","img/t_prawo_mini.jpg"];

var niespodziankaMiejsce = [];


     function losowanieKarty() {
		 wynik = Math.floor(Math.random() * (11 + 1));
		 return wynik;
	 }
	 
	 function losowanieStartMeta() {
		 wynik = Math.floor(Math.random() * (6 + 1));
		 return wynik;
	 }

	 function losowanieStartMetaKarta() {
		 wynik = Math.floor(Math.random() * (4 + 1));
		 return wynik;
	 }
	 
	 function losowanieStartMetaGry() {
		 wynik = Math.floor(Math.random() * (1+1));
		 return wynik;
	 }
	 
	 function losowanieNiespodzianki(){
		 wynik = Math.floor(Math.random() * (89+1));
		 return wynik;
	 }
	 

var wynikRur = 0;	 
var reka = [];
var kartyZagrane = [];
var wybranaKarta;
var blokada = true;
var istniejaca1 = false;
var istniejaca2 = false;
var istniejaca3 = false;
var istniejaca4 = false;
var start1 = start[losowanieStartMeta()];
var meta1 =  meta[losowanieStartMeta()];
var losowanieStrony = losowanieStartMetaGry();



	var startPrawo1 = start1+1;
	var startGora1 = start1-10;
	var startDol1 = start1+10;
	
	var metaLewo1 = meta1-1;
	var metaGora1 = meta1-10;
	var metaDol1 = meta1+10;
	
	var obrazStart= ("url(\""+startPrawo[losowanieStartMetaKarta()]+"\")");
	var obrazMeta= ("url(\""+startLewo[losowanieStartMetaKarta()]+"\")");





	
	if (losowanieStrony == 0 ) {
			var poleMety = ('p'+meta1);
		
	}
	if (losowanieStrony == 1) {
			var poleMety = ('p'+start1);
		
	}
	


startGry();


function startGry(){
	
	 //var kolorMety = '#FF6633';
	 var kolorMety = '#CCFF99';

	
if (losowanieStrony == 0){
	if (obrazStart==("url(\"img/poziom_mini.jpg\")")){$('#p'+startPrawo1).css('opacity','1');}
	if (obrazStart==("url(\"img/krzyz_mini.jpg\")")){$('#p'+startPrawo1).css('opacity','1');$('#p'+startGora1).css('opacity','1');$('#p'+startDol1).css('opacity','1');}
	if (obrazStart==("url(\"img/t_gora_mini.jpg\")")){$('#p'+startPrawo1).css('opacity','1');$('#p'+startGora1).css('opacity','1');}
	if (obrazStart==("url(\"img/t_dol_mini.jpg\")")){$('#p'+startPrawo1).css('opacity','1');$('#p'+startDol1).css('opacity','1');}
	if (obrazStart==("url(\"img/t_lewo_mini.jpg\")")){$('#p'+startGora1).css('opacity','1');$('#p'+startDol1).css('opacity','1');}
	
	if (obrazMeta==("url(\"img/poziom_mini.jpg\")")){$('#p'+metaLewo1).css('opacity','0.75').css('background',kolorMety);}
	if (obrazMeta==("url(\"img/krzyz_mini.jpg\")")){$('#p'+metaLewo1).css('opacity','0.75').css('background',kolorMety);$('#p'+metaGora1).css('opacity','0.75').css('background',kolorMety);$('#p'+metaDol1).css('opacity','0.75').css('background',kolorMety);}
	if (obrazMeta==("url(\"img/t_gora_mini.jpg\")")){$('#p'+metaLewo1).css('opacity','0.75').css('background',kolorMety);$('#p'+metaGora1).css('opacity','0.75').css('background',kolorMety);}
	if (obrazMeta==("url(\"img/t_dol_mini.jpg\")")){$('#p'+metaLewo1).css('opacity','0.75').css('background',kolorMety);$('#p'+metaDol1).css('opacity','0.75').css('background',kolorMety);}
	if (obrazMeta==("url(\"img/t_prawo_mini.jpg\")")){$('#p'+metaGora1).css('opacity','0.75').css('background',kolorMety);$('#p'+metaDol1).css('opacity','0.75').css('background',kolorMety);}
}

if (losowanieStrony ==1){
	if (obrazMeta==("url(\"img/poziom_mini.jpg\")")){$('#p'+metaLewo1).css('opacity','1');}
	if (obrazMeta==("url(\"img/krzyz_mini.jpg\")")){$('#p'+metaLewo1).css('opacity','1');$('#p'+metaGora1).css('opacity','1');$('#p'+metaDol1).css('opacity','1');}
	if (obrazMeta==("url(\"img/t_gora_mini.jpg\")")){$('#p'+metaLewo1).css('opacity','1');$('#p'+metaGora1).css('opacity','1');}
	if (obrazMeta==("url(\"img/t_dol_mini.jpg\")")){$('#p'+metaLewo1).css('opacity','1');$('#p'+metaDol1).css('opacity','1');}
	if (obrazMeta==("url(\"img/t_prawo_mini.jpg\")")){$('#p'+metaGora1).css('opacity','1');$('#p'+metaDol1).css('opacity','1');}
	
	if (obrazStart==("url(\"img/poziom_mini.jpg\")")){$('#p'+startPrawo1).css('opacity','0.75').css('background',kolorMety);}
	if (obrazStart==("url(\"img/krzyz_mini.jpg\")")){$('#p'+startPrawo1).css('opacity','0.75').css('background',kolorMety);$('#p'+startGora1).css('opacity','0.75').css('background',kolorMety);$('#p'+startDol1).css('opacity','0.75').css('background',kolorMety);}
	if (obrazStart==("url(\"img/t_gora_mini.jpg\")")){$('#p'+startPrawo1).css('opacity','0.75').css('background',kolorMety);$('#p'+startGora1).css('opacity','0.75').css('background',kolorMety);}
	if (obrazStart==("url(\"img/t_dol_mini.jpg\")")){$('#p'+startPrawo1).css('opacity','0.75').css('background',kolorMety);$('#p'+startDol1).css('opacity','0.75').css('background',kolorMety);}
	if (obrazStart==("url(\"img/t_lewo_mini.jpg\")")){$('#p'+startGora1).css('opacity','0.75').css('background',kolorMety);$('#p'+startDol1).css('opacity','0.75').css('background',kolorMety);}
}

$('#p'+start1).css('opacity','0.98');
$('#p'+meta1).css('opacity','0.98');
$('#p'+start1).css('background-image',obrazStart);	
$('#p'+meta1).css('background-image',obrazMeta);	






kartyZagrane.push(start1);
kartyZagrane.push(meta1);
}


for(i=0; i<5; i++) {

var wynik=losowanieKarty();
$('#c'+i).html('<img src="'+cards[wynik]+'.jpg"/>');

reka.push(cards[wynik]);	
}



var karta0  = document.getElementById('c0');	
var karta1  = document.getElementById('c1');	
var karta2  = document.getElementById('c2');	
var karta3  = document.getElementById('c3');	
var karta4  = document.getElementById('c4');	

karta0.addEventListener("click", function() { zaznaczKarte(0); wybranaKarta=0;});	
karta1.addEventListener("click", function() { zaznaczKarte(1); wybranaKarta=1;});	
karta2.addEventListener("click", function() { zaznaczKarte(2); wybranaKarta=2;});	
karta3.addEventListener("click", function() { zaznaczKarte(3); wybranaKarta=3;});	
karta4.addEventListener("click", function() { zaznaczKarte(4); wybranaKarta=4;});	


function zaznaczKarte(karta) {


var aktywnaKarta=karta;

var wynik1 = Math.floor(Math.random() * (11 + 1));
	
$('#c'+karta).addClass('polerekiActive');
$('#c'+karta).removeClass('polereki');

if (karta==0){ $('#c1').removeClass('polerekiActive');
			   $('#c1').addClass('polereki');
			   $('#c2').removeClass('polerekiActive');
			   $('#c2').addClass('polereki');
			   $('#c3').removeClass('polerekiActive');
			   $('#c3').addClass('polereki');
               $('#c4').removeClass('polerekiActive');
			   $('#c4').addClass('polereki');   }
if (karta==1){ $('#c0').removeClass('polerekiActive');
			   $('#c0').addClass('polereki');	
			   $('#c2').removeClass('polerekiActive');
			   $('#c2').addClass('polereki');	
			   $('#c3').removeClass('polerekiActive');
			   $('#c3').addClass('polereki');	
               $('#c4').removeClass('polerekiActive');
			   $('#c4').addClass('polereki');	}
if (karta==2){ $('#c0').removeClass('polerekiActive');
			   $('#c0').addClass('polereki');	
			   $('#c1').removeClass('polerekiActive');
			   $('#c1').addClass('polereki');	
			   $('#c3').removeClass('polerekiActive');
			   $('#c3').addClass('polereki');	
               $('#c4').removeClass('polerekiActive');
			   $('#c4').addClass('polereki');	}
if (karta==3){ $('#c0').removeClass('polerekiActive');
			   $('#c0').addClass('polereki');	
			   $('#c1').removeClass('polerekiActive');
			   $('#c1').addClass('polereki');	
			   $('#c2').removeClass('polerekiActive');
			   $('#c2').addClass('polereki');	
               $('#c4').removeClass('polerekiActive');
			   $('#c4').addClass('polereki');	}
if (karta==4){ $('#c0').removeClass('polerekiActive');
			   $('#c0').addClass('polereki');	
			   $('#c1').removeClass('polerekiActive');
			   $('#c1').addClass('polereki');	
			   $('#c2').removeClass('polerekiActive');
			   $('#c2').addClass('polereki');	
               $('#c3').removeClass('polerekiActive');
			   $('#c3').addClass('polereki');	}

}			   


for (var i=0; i<70; i++) {
	(function (e){
	$("#p"+e).click(function() {wstawKarte(e); });
	})(i);
	}

	function wstawKarte(karta) {

		
	var wybranaKarta1=reka[wybranaKarta];
	var opacityValue = $('#p'+karta).css('opacity');
	var karcioszka = karta;
	var karcioszkaMinus1 = karta-1;
	var karcioszkaPlus1 = karta+1;
	var karcioszkaMinus10 = karta-10;
	var karcioszkaPlus10 = karta+10;
	var prawidlowaKarta = false;

	
	
	 if ((opacityValue>0.99) && (wybranaKarta!=null)){

		

	var obraz = "url("+ reka[wybranaKarta] +"_mini.jpg"+ ")";
	
	var obraz2 = ("url(\""+ reka[wybranaKarta] +"_mini.jpg"+ "\")");

	
	var sprawdzMinus1 = document.getElementById('p'+karcioszkaMinus1);
	var sprawdzPlus1 = document.getElementById('p'+karcioszkaPlus1);
	var sprawdzMinus10 = document.getElementById('p'+karcioszkaMinus10);
	var sprawdzPlus10 = document.getElementById('p'+karcioszkaPlus10);
	
	 if (karcioszkaMinus1>-1) {var blub1 = (sprawdzMinus1.style.backgroundImage);}
	 if (karcioszkaPlus1<70) {var blub2 = (sprawdzPlus1.style.backgroundImage);}
	 if (karcioszkaMinus10>-1) {var blub3 = (sprawdzMinus10.style.backgroundImage);}
	 if (karcioszkaPlus10<70) {var blub4 = (sprawdzPlus10.style.backgroundImage);}


//sprawdzam co jest po lewej czy karta jest w tavblicy KierunekPrawo nastepnie sprawdzam jaka karte zagrywam i czy wystepuje w tablicy KierunekLewo

    


	for (s=0; s<8; s++) {
			var blob1 = kierunekPrawo[s];
			var blob11 = ("url(\""+blob1+"\")");

	if ((blub1==blob11) && ('p'+karcioszkaMinus1!=poleMety) && (blob11!='url("img/pusta_mini.jpg")')){ 
	for (d=0; d<8; d++) {
					var bleb1 = kierunekLewo[d];
					var bleb11 = ("url(\""+bleb1+"\")");
					if (bleb11==obraz2) { 	$('#p'+karta).css('background-image',obraz);
					$('.komunikat').html('');
					prawidlowaKarta = true;
					wynikRur = wynikRur + 1;
					for (n=0; n<10; n++){if(niespodziankaMiejsce[n]==karta){niespodziankaRodzaj();}}
					$('#iloscRur').html('Użyte rury: <b>'+wynikRur+'</b>');
					 sprawdzanieKoncaGry();
	 } 
									}
								}
	}


	for (s=0; s<8; s++) {
			var blob2 = kierunekLewo[s];
			var blob22 = ("url(\""+blob2+"\")");

	if ((blub2==blob22) && ('p'+karcioszkaPlus1!=poleMety)&& (blob22!='url("img/pusta_mini.jpg")')){ 
	for (d=0; d<8; d++) {
					var bleb2 = kierunekPrawo[d];
					var bleb22 = ("url(\""+bleb2+"\")");
					if (bleb22==obraz2) { 	$('#p'+karta).css('background-image',obraz);
					$('.komunikat').html('');
					prawidlowaKarta = true;
					wynikRur = wynikRur + 1;
					for (n=0; n<10; n++){if(niespodziankaMiejsce[n]==karta){niespodziankaRodzaj();}}
					$('#iloscRur').html('Użyte rury: <b>'+wynikRur+'</b>');
					 sprawdzanieKoncaGry();
	 } 
									}
								}
	}

	for (s=0; s<8; s++) {
			var blob3 = kierunekDol[s];
			var blob33 = ("url(\""+blob3+"\")");

	if ((blub3==blob33) && ('p'+karcioszkaMinus10!=poleMety) && (blob33!='url("img/pusta_mini.jpg")')){ 
	for (d=0; d<8; d++) {
					var bleb3 = kierunekGora[d];
					var bleb33 = ("url(\""+bleb3+"\")");
					if (bleb33==obraz2) { 	$('#p'+karta).css('background-image',obraz);
					$('.komunikat').html('');
					prawidlowaKarta = true;
					wynikRur = wynikRur + 1;
					for (n=0; n<10; n++){if(niespodziankaMiejsce[n]==karta){niespodziankaRodzaj();}}
					$('#iloscRur').html('Użyte rury: <b>'+wynikRur+'</b>');
					 sprawdzanieKoncaGry();
	 } 
									}
								}
	}

	for (s=0; s<8; s++) {
			var blob4 = kierunekGora[s];
			var blob44 = ("url(\""+blob4+"\")");

	if ((blub4==blob44) && ('p'+karcioszkaPlus10!=poleMety) && (blob44!='url("img/pusta_mini.jpg")')){ 
	for (d=0; d<8; d++) {
					var bleb4 = kierunekDol[d];
					var bleb44 = ("url(\""+bleb4+"\")");
					if (bleb44==obraz2) { 	$('#p'+karta).css('background-image',obraz);
					$('.komunikat').html('');
					prawidlowaKarta = true;
					wynikRur = wynikRur + 1;					
					for (n=0; n<10; n++){if(niespodziankaMiejsce[n]==karta){niespodziankaRodzaj();}}
					$('#iloscRur').html('Użyte rury: <b>'+wynikRur+'</b>');
					 sprawdzanieKoncaGry();
	 } 
									}
								}
	}
	
  if (prawidlowaKarta == false){return;}
	
	$('#p'+karta).css('opacity', '0.98');
	$('#c'+wybranaKarta).removeClass('polerekiActive');
	$('#c'+wybranaKarta).addClass('polereki');
	var wynik1=Math.floor(Math.random() * (11 + 1));
	reka.splice(wybranaKarta,1, cards[wynik1]);	
	$('#c'+wybranaKarta).html('<img src="'+cards[wynik1]+'.jpg"/>');
	
	kartyZagrane.push(karta);
	
	for (var k=0; k<kartyZagrane.length; k++ ){
	
	var check = kartyZagrane[k];
	if (check == karcioszka-1) {
		istniejaca1 = true;
		if ( k == 0) {istniejaca1 = false;}
	}
	if (check == karcioszka+1) {
		istniejaca2 = true;
		if ( k == 0) {istniejaca2 = false;}
	}
	if (check == karcioszka-10) {
		istniejaca3 = true;
		if ( k == 0) {istniejaca3 = false;}
	}
	if (check == karcioszka+10) {
		istniejaca4 = true;
		if ( k == 0) {istniejaca4 = false;}
	}

	}

  // sprawdzic czy pole nie jest startowe
	if (((karta!="0") ^ (karta!="10") ^ (karta!="20") ^ (karta!="30") ^ (karta!="40") ^ (karta!="50") ^ (karta!="60")) &&
	((wybranaKarta1=="img/krzyz") ^ (wybranaKarta1=="img/poziom") ^ (wybranaKarta1=="img/t_gora") ^ (wybranaKarta1=="img/t_dol") ^ (wybranaKarta1=="img/t_lewo") ^ (wybranaKarta1=="img/kat_gl") ^ (wybranaKarta1=="img/kat_dl")) &&
	((istniejaca1 == false))) {
								$('#p'+(karta-1)).css('opacity','1');}

	
	if (((karta!="9") ^ (karta!="19") ^ (karta!="29") ^ (karta!="39") ^ (karta!="49") ^ (karta!="59") ^ (karta!="69")) &&
	((wybranaKarta1=="img/krzyz") ^ (wybranaKarta1=="img/poziom") ^ (wybranaKarta1=="img/t_gora") ^ (wybranaKarta1=="img/t_dol") ^ (wybranaKarta1=="img/t_prawo") ^ (wybranaKarta1=="img/kat_gp") ^ (wybranaKarta1=="img/kat_dp")) &&
	((istniejaca2 == false))) { 
								$('#p'+(karta+1)).css('opacity','1');}

	
	if (((wybranaKarta1=="img/krzyz") ^ (wybranaKarta1=="img/pion") ^ (wybranaKarta1=="img/t_gora") ^ (wybranaKarta1=="img/t_prawo") ^ (wybranaKarta1=="img/t_lewo")^ (wybranaKarta1=="img/kat_gl") ^ (wybranaKarta1=="img/kat_gp")) &&
		(istniejaca3 == false)) {
								 $('#p'+(karta-10)).css('opacity','1');}
	if (((wybranaKarta1=="img/krzyz") ^ (wybranaKarta1=="img/pion") ^ (wybranaKarta1=="img/t_dol") ^ (wybranaKarta1=="img/t_prawo") ^ (wybranaKarta1=="img/t_lewo") ^ (wybranaKarta1=="img/kat_dl") ^ (wybranaKarta1=="img/kat_dp")) &&
		(istniejaca4 == false)) {
								 $('#p'+(karta+10)).css('opacity','1');}	
		
	 }

	 
	 $('#c'+wybranaKarta).addClass('polereki');
	 $('#c'+wybranaKarta).removeClass('polerekiActive');
	 
	 wybranaKarta = null;
	 istniejaca1 = false;
	 istniejaca2 = false;
	 istniejaca3 = false;
	 istniejaca4 = false;
	 

	
	 function sprawdzanieKoncaGry() {
		 		var ostatniaRura=wybranaKarta1+'_mini.jpg';
		 
		 
	 if (losowanieStrony==0 && opacityValue>0.9) {
		 
		 if ((metaLewo1==karta) && ((obrazMeta=="url(\"img/poziom_mini.jpg\")" ) || (obrazMeta=="url(\"img/poziom_mini.jpg\")") || (obrazMeta=="url(\"img/krzyz_mini.jpg\")")  || (obrazMeta=="url(\"img/t_gora_mini.jpg\")") || (obrazMeta=="url(\"img/t_dol_mini.jpg\")") ))
		 {for (f=0; f<7; f++) {if (kierunekPrawo[f]==ostatniaRura){$('.board').html('<a href="javascript:location.reload();"><div class="jeszczeraz">Jeszcze raz?<br><br>Udało ci się ułożyć rurociąg <br>wykorzystując <br>'+wynikRur+' rur.</div></a>');} } }
		 if ((metaGora1==karta) && ((obrazMeta=="url(\"img/pion_mini.jpg\")" ) || (obrazMeta=="url(\"img/krzyz_mini.jpg\")") || (obrazMeta=="url(\"img/t_gora_mini.jpg\")")  || (obrazMeta=="url(\"img/t_prawo_mini.jpg\")") || (obrazMeta=="url(\"img/t_lewo_mini.jpg\")") || (obrazMeta=="url(\"img/kat_dl_mini.jpg\")") || (obrazMeta=="url(\"img/kat_dp_mini.jpg\")")))
		 {for (f=0; f<7; f++) {if (kierunekDol[f]==ostatniaRura){$('.board').html('<a href="javascript:location.reload();"><div class="jeszczeraz">Jeszcze raz? <br><br>Udało ci się ułożyć rurociąg <br>wykorzystując <br>'+wynikRur+' rur.</div></a>');} } }
		 if ((metaDol1==karta) && ((obrazMeta=="url(\"img/pion_mini.jpg\")" ) || (obrazMeta=="url(\"img/krzyz_mini.jpg\")") || (obrazMeta=="url(\"img/t_dol_mini.jpg\")")  || (obrazMeta=="url(\"img/t_prawo_mini.jpg\")") || (obrazMeta=="url(\"img/t_lewo_mini.jpg\")") || (obrazMeta=="url(\"img/kat_gl_mini.jpg\")") || (obrazMeta=="url(\"img/kat_gp_mini.jpg\")")))
		 {for (f=0; f<7; f++) {if (kierunekGora[f]==ostatniaRura){$('.board').html('<a href="javascript:location.reload();"><div class="jeszczeraz">Jeszcze raz? <br><br>Udało ci się ułożyć rurociąg <br>wykorzystując <br>'+wynikRur+' rur.</div></a>'); $('.playground').htm} } }
		 
	 }
	 if (losowanieStrony==1 && opacityValue>0.9){
		 
		 if ((startPrawo1==karta) && ((obrazStart=="url(\"img/poziom_mini.jpg\")" ) || (obrazStart=="url(\"img/poziom_mini.jpg\")") || (obrazStart=="url(\"img/krzyz_mini.jpg\")")  || (obrazStart=="url(\"img/t_gora_mini.jpg\")") || (obrazStart=="url(\"img/t_dol_mini.jpg\")") ))
		 {for (f=0; f<7; f++) {if (kierunekLewo[f]==ostatniaRura){$('.board').html('<a href="javascript:location.reload();"><div class="jeszczeraz">Jeszcze raz? <br><br>Udało ci się ułożyć rurociąg <br>wykorzystując <br>'+wynikRur+' rur.</div></a>');} } }
		 if ((startGora1==karta) && ((obrazStart=="url(\"img/pion_mini.jpg\")" ) || (obrazStart=="url(\"img/krzyz_mini.jpg\")") || (obrazStart=="url(\"img/t_gora_mini.jpg\")")  || (obrazStart=="url(\"img/t_prawo_mini.jpg\")") || (obrazStart=="url(\"img/t_lewo_mini.jpg\")") || (obrazStart=="url(\"img/kat_dl_mini.jpg\")") || (obrazStart=="url(\"img/kat_dp_mini.jpg\")")))
		 {for (f=0; f<7; f++) {if (kierunekDol[f]==ostatniaRura){$('.board').html('<a href="javascript:location.reload();"><div class="jeszczeraz">Jeszcze raz? <br><br>Udało ci się ułożyć rurociąg <br>wykorzystując <br>'+wynikRur+' rur.</div></a>');} } }
		 if ((startDol1==karta) && ((obrazStart=="url(\"img/pion_mini.jpg\")" ) || (obrazStart=="url(\"img/krzyz_mini.jpg\")") || (obrazStart=="url(\"img/t_dol_mini.jpg\")")  || (obrazStart=="url(\"img/t_prawo_mini.jpg\")") || (obrazStart=="url(\"img/t_lewo_mini.jpg\")") || (obrazStart=="url(\"img/kat_gl_mini.jpg\")") || (obrazStart=="url(\"img/kat_gp_mini.jpg\")"))) 
		 {for (f=0; f<7; f++) {if (kierunekGora[f]==ostatniaRura){$('.board').html('<a href="javascript:location.reload();"><div class="jeszczeraz">Jeszcze raz? <br><br>Udało ci się ułożyć rurociąg <br>wykorzystując <br>'+wynikRur+' rur.</div></a>');} } }

	 }
	 }
	 
	 
	 
	 
	}	
			
			
			
niespodzianki();



 function niespodzianki() {
	 
	var niespodzianka = "url(\"img/niespodzianka1.png\")";
	 

  for (l=0; l<10; l++) {
	  var los1 = losowanieNiespodzianki();

	  for (i=0; i<niespodziankaMiejsce.length; i++){
		  if (los1==niespodziankaMiejsce[i]) {
				los1=null;
		  }
	  }
	  
	  
	  if ((los1!=start1) && (los1!=start1-1) && (los1!=start1+1)&& (los1!=start1-10)&& (los1!=start1+10) && (los1!=meta1) && (los1!=meta1-1) && (los1!=meta1+1) && (los1!=meta1-10) && (los1!=meta1+10)){
          $('#p'+los1).css('background',niespodzianka);
		  niespodziankaMiejsce.push(los1);
		}
		
		}
	}
	
function niespodziankaRodzaj() {

	
	var losowanieNiespodzianki = Math.floor(Math.random() *(4+1));

	if (losowanieNiespodzianki==0) {
		$('.komunikat').html('Zwiększono licznik wykorzystanych rur o 3 !');
		wynikRur = wynikRur + 3;
	}
	
	if (losowanieNiespodzianki==1) {
		$('.komunikat').html('Zmniejszono licznik wykorzystanych rur o 3 !');
		wynikRur = wynikRur - 3;
	}
	
	if (losowanieNiespodzianki==2) {
		$('.komunikat').html('Zwiększono licznik wykorzystanych rur o 5 !');
		wynikRur = wynikRur + 5;
	}
	
	if (losowanieNiespodzianki==3) {
		$('.komunikat').html('Zmniejszono licznik wykorzystanych rur o 5 !');
		wynikRur = wynikRur - 5;
	}
	
	if (losowanieNiespodzianki==4) {
		$('.komunikat').html('Wylosowano 5 nowych kart rur !');
		reka.splice(0,5);
	for(i=0; i<5; i++) {		
		var wynik=losowanieKarty();
		$('#c'+i).html('<img src="'+cards[wynik]+'.jpg"/>');
		reka.push(cards[wynik]);
	}
	}
	
	if (losowanieNiespodzianki==5) {
		$('.komunikat').html('Wylosowano 5 nowych kart rur !');
		reka.splice(0,5);
	for(i=0; i<5; i++) {		
		var wynik=losowanieKarty();
		$('#c'+i).html('<img src="'+cards[wynik]+'.jpg"/>');
		reka.push(cards[wynik]);
	}
	}

	}
	
	
	










				
