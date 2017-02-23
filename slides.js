

// Called by <object id='linesofcodetimespent'> onload
function linesofcodetimespent_load(){
	var s = Snap("#linesofcodetimespent");
	animations.linesofcodetimespent1.hide(s);
	animations.linesofcodetimespent2.hide(s);
	animations.linesofcodetimespent3.hide(s);
	animations.linesofcodetimespent4.hide(s);
}

function opensourceci_load(){
	var s = Snap("#opensourceci");
	animations.opensourceci1.hide(s);
}

var animations = {
	//==========================================================================
	linesofcodetimespent1: {
		show: function(s){ s.select("#frag1").animate({opacity: 1, transform: "translate(-88.6 -127)"}, 700, mina.bounce); },
		hide: function(s){ s.select("#frag1").animate({opacity: 0, transform: "translate(-88.6 -150)"}, 700); },
	},
	linesofcodetimespent2: {
		show: function(s){ s.select("#frag2").animate({opacity: 1, transform: "translate(-88.6 -127)"}, 700, mina.bounce); },
		hide: function(s){ s.select("#frag2").animate({opacity: 0, transform: "translate(-88.6 -150)"}, 700); },
	},
	linesofcodetimespent3: {
		show: function(s){ s.select("#frag3").animate({opacity: 1, transform: "translate(-88.6 -127)"}, 700, mina.bounce); },
		hide: function(s){ s.select("#frag3").animate({opacity: 0, transform: "translate(-88.6 -150)"}, 700); },
	},
	linesofcodetimespent4: {
		show: function(s){ s.select("#frag4").animate({opacity: 1}, 700); },
		hide: function(s){ s.select("#frag4").animate({opacity: 0}, 700); },
	},
	linesofcodetimespent5: {
		show: function(s){
			s.select("#frag1").animate({opacity: 0}, 300);
			s.select("#frag2").animate({opacity: 0}, 300);
			s.select("#frag3").animate({opacity: 0}, 300);
			s.select("#frag4").animate({opacity: 0}, 300);
			s.select("#curve").animate({d : "m 5.2916665,23 c 10,10  20,10  57,10"}, 3000, mina.easeinout);
		},
		hide: function(s){
			s.select("#frag1").animate({opacity: 1}, 300);
			s.select("#frag2").animate({opacity: 1}, 300);
			s.select("#frag3").animate({opacity: 1}, 300);
			s.select("#frag4").animate({opacity: 1}, 300);
			s.select("#curve").animate({d : "m5.29 33.4c21-4 51.4-8.98 57.4-33"}, 1000, mina.easeinout);
		},
	},

	//==========================================================================
	opensourceci1: {
		show: function(s){
			s.select("#walls").animate({opacity: 1, transform: "translate(2.65)"}, 700, mina.easeinout);
			s.select("#arrow").animate({d: "m63.4 66.8h2"}, 500, mina.easeinout);
			s.selectAll("[id^=frag_text]").animate({opacity: 0}, 0);
		},
		hide: function(s){
			s.select("#walls").animate({opacity: 0, transform: "translate(2.65 -20)"}, 200);
			s.select("#arrow").animate({d: "m63.4 66.8h23.8"}, 200);
		},
	},
	opensourceci2: {
		show: function(s){
			s.select("#arrow").animate({d: "m63.4 66.8h3"}, 500, mina.bounce);
			s.select("#frag_text1").animate({opacity: 1}, 500);
		},
		hide: function(s){
			s.select("#arrow").animate({d: "m63.4 66.8h2"}, 200);
			s.select("#frag_text1").animate({opacity: 0}, 200);
		},
	},
	opensourceci3: {
		show: function(s){
			s.select("#arrow").animate({d: "m63.4 66.8h8.3"}, 300, mina.backin);
			s.select("#frag_text1").animate({opacity: 0}, 200);
			s.select("#frag_text2").animate({opacity: 1}, 500);
			s.select("#frag_wall1").animate({d: "m63.5 58.9   1.5 6.61  -1.5 6.61", opacity: 0.5, stroke: "#0f0"}, 300, mina.backin);
		},
		hide: function(s){
			s.select("#arrow").animate({d: "m63.4 66.8h3"}, 200);
			s.select("#frag_text1").animate({opacity: 1}, 200);
			s.select("#frag_text2").animate({opacity: 0}, 200);
			s.select("#frag_wall1").animate({d: "m63.5 58.9 1e-6 6.61v6.61", opacity: 1, stroke: "#f60"}, 200);
		},
	},
	opensourceci4: {
		show: function(s){
			s.select("#arrow").animate({d: "m63.4 66.8h13.6"}, 300, mina.backin);
			s.select("#frag_text2").animate({opacity: 0}, 200);
			s.select("#frag_text3").animate({opacity: 1}, 500);
			s.select("#frag_wall2").animate({d: "m71.4 58.9   1.5 6.61  -1.5 6.61", opacity: 0.5, stroke: "#0f0"}, 300, mina.backin);
		},
		hide: function(s){
			s.select("#arrow").animate({d: "m63.4 66.8h8"}, 200);
			s.select("#frag_text2").animate({opacity: 1}, 200);
			s.select("#frag_text3").animate({opacity: 0}, 200);
			s.select("#frag_wall2").animate({d: "m71.4 58.9v6.61 6.61", opacity: 1, stroke: "#f60"}, 200);
		},
	},
	opensourceci5: {
		show: function(s){
			s.select("#arrow").animate({d: "m63.4 66.8h18.9"}, 300, mina.backin);
			s.select("#frag_text3").animate({opacity: 0}, 200);
			s.select("#frag_text4").animate({opacity: 1}, 500);
			s.select("#frag_wall3").animate({d: "m63.5 58.9   1.5 6.61  -1.5 6.61", opacity: 0.5, stroke: "#0f0"}, 300, mina.backin);
		},
		hide: function(s){
			s.select("#arrow").animate({d: "m63.4 66.8h13"}, 200);
			s.select("#frag_text3").animate({opacity: 1}, 200);
			s.select("#frag_text4").animate({opacity: 0}, 200);
			s.select("#frag_wall3").animate({d: "m63.5 58.9 1e-6 6.61-1e-6 6.61", opacity: 1, stroke: "#f60"}, 200);
		},
	},
	opensourceci6: {
		show: function(s){
			s.select("#frag_text4").animate({opacity: 0}, 200);
			s.select("#arrow").animate({d: "m63.4 66.8h23.8"}, 300, mina.backin);
			s.select("#frag_wall4").animate({d: "m63.5 58.9   1.5 6.61  -1.5 6.61", opacity: 0.5, stroke: "#0f0"}, 300, mina.backin);
		},
		hide: function(s){
			s.select("#frag_text4").animate({opacity: 1}, 200);
			s.select("#arrow").animate({d: "m63.4 66.8h18.9"}, 200);
			s.select("#frag_wall4").animate({d: "m63.5 58.9v6.61 6.61", opacity: 1, stroke: "#f60"}, 200);
		},
	}
}




Reveal.addEventListener('ready', function(event) {
	Reveal.addEventListener('fragmentshown', function(event) {
		if(event.fragment.id in animations){
			var svg_id = event.fragment.id.replace(/\d+$/, "");
			var s = Snap("#"+svg_id);
			animations[event.fragment.id].show(s);
		}
	});
	Reveal.addEventListener('fragmenthidden', function(event) {
		if(event.fragment.id in animations){
			var svg_id = event.fragment.id.replace(/\d+$/, "");
			var s = Snap("#"+svg_id);
			animations[event.fragment.id].hide(s);
		}
	});
});