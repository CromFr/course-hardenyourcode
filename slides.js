

// Called by <object id='linesofcodetimespent'> onload
function linesofcodetimespent_load(){
	var s = Snap("#linesofcodetimespent");
	s.select("#frag1").animate({opacity: 0}, 0);
	s.select("#frag2").animate({opacity: 0}, 0);
	s.select("#frag3").animate({opacity: 0}, 0);
	s.select("#frag4").animate({opacity: 0}, 0);
}

var animations = {
	linesofcodetimespent1: {
		show: function(s){ s.select("#frag1").animate({opacity: 1}, 700); },
		hide: function(s){ s.select("#frag1").animate({opacity: 0}, 700); },
	},
	linesofcodetimespent2: {
		show: function(s){ s.select("#frag2").animate({opacity: 1}, 700); },
		hide: function(s){ s.select("#frag2").animate({opacity: 0}, 700); },
	},
	linesofcodetimespent3: {
		show: function(s){ s.select("#frag3").animate({opacity: 1}, 700); },
		hide: function(s){ s.select("#frag3").animate({opacity: 0}, 700); },
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