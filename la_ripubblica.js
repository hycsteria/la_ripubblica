cartoons = [
{text_to_replace:"Trump", new_text:"PORKY", image:"http://www.ludicer.it/personaggi/porky-pig/porky.gif"},
{text_to_replace:"Morata", new_text:"HERCULES", image:"http://images.clipartpanda.com/hercules-clip-art-hercules002.gif"},
{text_to_replace:"Totti", new_text:"CENERENTOLA", image:""}
];

for (var i = 0; i < cartoons.length; i++){

	text_to_replace = cartoons[i].text_to_replace;
	text_new = cartoons[i].text_new;
	image = cartoons[i].image;

	article = jQuery('div:contains("' + text_to_replace + '")').closest("article").find("img");
	article.attr("src", image);

	article.children().each(function () {
	    $(this).html( $(this).html().replace(/text_to_replace/g,text_new) );
	})

};


