Reveal.addEventListener('linesofcodetimespent', function() {


		var s = Snap("#linesofcodetimespent");
		s.select("#frag1").animate({opacity: 0}, 0);
		s.select("#frag2").animate({opacity: 0}, 0);
		s.select("#frag3").animate({opacity: 0}, 0);
		s.select("#frag4").animate({opacity: 0}, 0);
	}, false);

Reveal.addEventListener('ready', function(event) {



	Reveal.addEventListener('fragmentshown', function(event) {
		// event.fragment = the fragment DOM element
		console.log("fragment: ", event);

		switch (event.fragment.id) {
			case "linesofcodetimespent1":
				var s = Snap("#linesofcodetimespent");
				s.select("#frag1").animate({opacity: 1}, 700);
				break;
			case "linesofcodetimespent2":
				var s = Snap("#linesofcodetimespent");
				s.select("#frag2").animate({opacity: 1}, 700);
				break;
			case "linesofcodetimespent3":
				var s = Snap("#linesofcodetimespent");
				s.select("#frag3").animate({opacity: 1}, 700);
				break;
			case "linesofcodetimespent4":
				var s = Snap("#linesofcodetimespent");
				s.select("#frag4").animate({opacity: 1}, 700);
				break;
			case "linesofcodetimespent5":
				var s = Snap("#linesofcodetimespent");
				s.select("#frag1").animate({opacity: 0}, 300);
				s.select("#frag2").animate({opacity: 0}, 300);
				s.select("#frag3").animate({opacity: 0}, 300);
				s.select("#frag4").animate({opacity: 0}, 300);
				s.select("#curve").animate({d : "m 5.2916665,23 c 10,10  20,10  57,10"}, 3000, mina.easeinout);
				break;
		}
	});
});