
function substituteDummyForCartoons() {
    window.alert("CIAOOOOO");
    cartoons = [{
            text_to_replace: "Trump",
            new_text: "PORKY",
            image: "http://www.ludicer.it/personaggi/porky-pig/porky.gif"
        },
        {
            text_to_replace: "Valentino Rossi",
            new_text: "HERCULES",
            image: "http://images.clipartpanda.com/hercules-clip-art-hercules002.gif"
        },
        {
            text_to_replace: "Totti",
            new_text: "CENERENTOLA",
            image: "http://www.regnodisney.it/wp-content/uploads/2014/12/cinderella-disneyscreencaps.com-5423.jpg"
        }
    ];


    for (var i = 0; i < cartoons.length; i++) {

        text_to_replace = cartoons[i].text_to_replace;
        text_new = cartoons[i].new_text;
        image = cartoons[i].image;
        var article_container = "";



        article_container_array = jQuery('div:contains("' + text_to_replace + '")').each(function() {

            article_container = $(this).closest("article");
            if (article_container.html() != undefined) {

                var re = new RegExp(text_to_replace, "g");
                new_article_text = article_container.html().replace(re, text_new);
                article_container.html(new_article_text);
            }

            article_image = article_container.find("img");
            article_image.attr("src", image);
        })

    }

};

