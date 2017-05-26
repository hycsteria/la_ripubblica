

(function() {


    cartoons = [{
            text_to_replace: "Trump",
            new_text: "PORKY",
            image: "https://static.comicvine.com/uploads/original/11/111746/4352083-a5f015baf0dfa8934aa3ed03b2463e3b.jpg"
        },
        {
            text_to_replace: "Valentino Rossi",
            new_text: "HERCULES",
            image: "http://orig06.deviantart.net/343f/f/2015/193/0/8/disney_hercules_x_reader_by_scrougeofares-d91203m.jpg"
        },
        {
            text_to_replace: "Totti",
            new_text: "CENERENTOLA",
            image: "http://www.regnodisney.it/wp-content/uploads/2014/12/cinderella-disneyscreencaps.com-5423.jpg"
        },
                 {
                     text_to_replace: "Orto",
                     new_text: "CENERENTOLA",
                     image: "http://www.regnodisney.it/wp-content/uploads/2014/12/cinderella-disneyscreencaps.com-5423.jpg"
                 }
    ];

    var count_substitution = 0;

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

                count_substitution++
            }

            article_image = article_container.find("img");
            article_image.attr("src", image);
            article_image.removeClass("lazy");
        })

    }

    jQuery(".hp-update").text("YEAAAH! Hai rIpubblicato " + i + " articoli!!");
})();