

// Called by <object id='linesofcodetimespent'> onload
function linesofcodetimespent_load(){
	var s = Snap("#linesofcodetimespent");
	s.selectAll("#frag1,#frag2,#frag3").attr({opacity: 0, transform: "translate(0 -20)"});
	s.select("#frag4").attr({opacity: 0});
}

function opensourceci_load(){
	var s = Snap("#opensourceci");
	s.selectAll("[id^=frag_text]").attr({opacity: 0});
	s.select("#walls").attr({opacity: 0, transform: "translate(0 -20)"});
}
function dependencygraph_load(){
	var s = Snap("#dependencygraph");
	// s.selectAll("[id^=frag]").attr({opacity: 0});
	s.selectAll("#frag1,#frag2,#frag3,#frag4").attr({opacity: 0});
	s.selectAll("#bug").attr({opacity: 0});
}


var animations = {
	//==========================================================================
	linesofcodetimespent1: {
		anim: function(id){ svgAnimate(id, "#frag1", {opacity: 1, transform: "translate(0 0)"}, 700, mina.bounce); },
	},
	linesofcodetimespent2: {
		anim: function(id){ svgAnimate(id, "#frag2", {opacity: 1, transform: "translate(0 0)"}, 700, mina.bounce); },
	},
	linesofcodetimespent3: {
		anim: function(id){ svgAnimate(id, "#frag3", {opacity: 1, transform: "translate(0 0)"}, 700, mina.bounce); },
	},
	linesofcodetimespent4: {
		anim: function(id){ svgAnimate(id, "#frag4", {opacity: 1}, 700); },
	},
	linesofcodetimespent5: {
		anim: function(id){
			svgAnimate(id, "#frag1", {opacity: 0}, 300);
			svgAnimate(id, "#frag2", {opacity: 0}, 300);
			svgAnimate(id, "#frag3", {opacity: 0}, 300);
			svgAnimate(id, "#frag4", {opacity: 0}, 300);
			svgAnimate(id, "#curve", {d : "m 5,20 c 10,10  15,13  58 13"}, 2000, mina.easeinout);
		},
	},

	//==========================================================================
	opensourceci1: {
		anim: function(id){
			svgAnimate(id, "#walls", {opacity: 1, transform: "translate(0)"}, 700, mina.easeinout);
			svgAnimate(id, "#arrow", {d: "m6 10h3"}, 500, mina.easeinout);
		},
	},
	opensourceci2: {
		anim: function(id){
			svgAnimate(id, "#arrow", {d: "m6 10h8"}, 500, mina.bounce);
			svgAnimate(id, "#frag_text1", {opacity: 1}, 500);
		},
	},
	opensourceci3: {
		anim: function(id){
			svgAnimate(id, "#arrow", {d: "m6 10h13"}, 300, mina.backin);
			svgAnimate(id, "#frag_wall1", {d: "m15 4  1.5 6  -1.5 6", opacity: 0.5, stroke: "#0f0"}, 300, mina.backin);
			svgAnimate(id, "#frag_text1", {opacity: 0}, 200);
			svgAnimate(id, "#frag_text2", {opacity: 1}, 500);
		},
	},
	opensourceci4: {
		anim: function(id){
			svgAnimate(id, "#arrow", {d: "m6 10h18"}, 300, mina.backin);
			svgAnimate(id, "#frag_wall2", {d: "m20 4  1.5 6  -1.5 6", opacity: 0.5, stroke: "#0f0"}, 300, mina.backin);
			svgAnimate(id, "#frag_text2", {opacity: 0}, 200);
			svgAnimate(id, "#frag_text3", {opacity: 1}, 500);
		},
	},
	opensourceci5: {
		anim: function(id){
			svgAnimate(id, "#arrow", {d: "m6 10h23"}, 300, mina.backin);
			svgAnimate(id, "#frag_wall3", {d: "m25 4  1.5 6  -1.5 6", opacity: 0.5, stroke: "#0f0"}, 300, mina.backin);
			svgAnimate(id, "#frag_text3", {opacity: 0}, 200);
			svgAnimate(id, "#frag_text4", {opacity: 1}, 500);
		},
	},
	opensourceci6: {
		anim: function(id){
			svgAnimate(id, "#arrow", {d: "m6 10h28"}, 300, mina.backin);
			svgAnimate(id, "#frag_wall4", {d: "m30 4  1.5 6  -1.5 6", opacity: 0.5, stroke: "#0f0"}, 300, mina.backin);
			svgAnimate(id, "#frag_text4", {opacity: 0}, 200);
		},
	},

	//==========================================================================
	dependencygraph1: {
		anim: function(id){ svgAnimate(id, "#frag1", {opacity: 1}, 700, mina.easeinout); }
	},
	dependencygraph2: {
		anim: function(id){ svgAnimate(id, "#frag2", {opacity: 1}, 700, mina.easeinout); }
	},
	dependencygraph3: {
		anim: function(id){ svgAnimate(id, "#frag3", {opacity: 1}, 700, mina.easeinout); }
	},
	dependencygraph4: {
		anim: function(id){ svgAnimate(id, "#frag4", {opacity: 1}, 700, mina.easeinout); }
	},
	dependencygraph5: {
		anim: function(id){ svgAnimate(id, "#bug", {opacity: 1}, 700, mina.bounce); }
	},
	dependencygraph6: {
		anim: function(id){
			svgAnimate(id, "#reader > g:nth-child(3) > path:nth-child(2)", {stroke: "#f00"}, 700, mina.bounce);
			svgAnimate(id, "#reader > g:nth-child(3) > path:nth-child(3)", {stroke: "#f00"}, 700, mina.bounce);
		}
	},
	dependencygraph7: {
		anim: function(id){ svgAnimate(id, "#xml_parser > g:nth-child(3) > path:nth-child(2)", {stroke: "#f00"}, 700, mina.bounce); }
	},
	dependencygraph8: {
		anim: function(id){
			svgAnimate(id, "#window > g > g:nth-child(3) > path:nth-child(1)", {stroke: "#f00"}, 700, mina.bounce);
			svgAnimate(id, "#wizard_helper > g:nth-child(3) > path:nth-child(1)", {stroke: "#f00"}, 700, mina.bounce);
			svgAnimate(id, "#button > g:nth-child(3) > path:nth-child(3)", {stroke: "#f00"}, 700, mina.bounce);
			svgAnimate(id, "#text_box > g:nth-child(3) > path:nth-child(2)", {stroke: "#f00"}, 700, mina.bounce);
		}
	},
	dependencygraph9: {
		anim: function(id){
			svgAnimate(id, "#main > g:nth-child(3) > path:nth-child(1)", {stroke: "#f00"}, 700, mina.bounce);
			svgAnimate(id, "#main > g:nth-child(3) > path:nth-child(2)", {stroke: "#f00"}, 700, mina.bounce);
			svgAnimate(id, "#main > g:nth-child(3) > path:nth-child(3)", {stroke: "#f00"}, 700, mina.bounce);
		}
	},
}


function svgAnimate(id, selector, attrs, duration, easing, callback){
	if(id in animations){
		var svg_id = id.replace(/\d+$/, "");
		var svg = Snap("#"+svg_id).select(selector);

		if(!svg)
			console.error("Could not find SVG #"+svg_id+" ",selector);

		if(!("init" in animations[id])){
			animations[id].init = {};
		}
		if(!(selector in animations[id].init)){
			var initAttrs = {};
			for (var key in attrs){
				if(key in svg.attr())
					initAttrs[key] = svg.attr()[key];
				else{
					//find in style attr
					var style = window.getComputedStyle(svg.node);
					initAttrs[key] = style[key];
				}
			}

			animations[id].init[selector] = initAttrs;
		}

		svg.animate(attrs, duration, easing, callback);
	}
	else
		console.warn("could not find fragment ID=",id," in animations table");
}

function svgResetAnimation(id){
	if(id in animations && "init" in animations[id]){
		var svg_id = id.replace(/\d+$/, "");
		var svg_main = Snap("#"+svg_id);

		for (var selector in animations[id].init){
			var svg = svg_main.select(selector);
			svg.animate(animations[id].init[selector], 200);
		}
	}
	else
		console.warn("could not find fragment ID=",id," in animations table");
}


Reveal.addEventListener('ready', function(event) {
	Reveal.addEventListener('fragmentshown', function(event) {
		if(event.fragment.id in animations){
			animations[event.fragment.id].anim(event.fragment.id);
		}
	});
	Reveal.addEventListener('fragmenthidden', function(event) {
		if(event.fragment.id in animations){
			svgResetAnimation(event.fragment.id);
		}
	});
});