$(document).ready(function() {
  let clicks = 0;
  let cardPair = [];

  let icons = [
    "images/icons/one",
    "images/icons/two",
    "images/icons/three",
    "images/icons/four",
    "images/icons/five",
    "images/icons/six",
    "images/icons/seven",
    "images/icons/eight",
    "images/icons/one",
    "images/icons/two",
    "images/icons/three",
    "images/icons/four",
    "images/icons/five",
    "images/icons/six",
    "images/icons/seven",
    "images/icons/eight"
  ];
  //shuffling cards
  function shuffleCards() {
    let j, x, i;
    for (i = icons.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = icons[i];
      icons[i] = icons[j];
      icons[j] = x;
    }
    return icons;
  }
  let index = 0;
  //make squares
  function makeGrid(r, c) {
    for (let i = 0; i < r; i++) {
      $(".canvas").append('<div class= "row" id =' + i + ">" + "</div>");
      for (let j = 0; j < c; j++) {
        $("#" + i).append(
          '<div class= "block text-center col-sm-6 col-md-3"><img class = "icon img img-responsive" src =' +
            icons[index] +
            ".png" +
            ">" +
            "</div>"
        );
        index++;
      }
    }
  }
  shuffleCards();
  makeGrid(4, 4);

  $(".restart").on("click", function() {
    location.reload();
  });

  $(".block").on("click", function() {
    let child = $(this).children();
    let p1;
    let p2;
    let imgOneSrc;
    let imgTwoSrc;
    clicks++;

    $(child).css({
      opacity: "1"
    });
    cardPair = $(cardPair);
    cardPair.push($(this));
    if (cardPair.length === 2) {
      p1 = cardPair[0][0];
      p1 = $(p1).children();
      p2 = cardPair[1][0];
      p2 = $(p2).children();
      p1 = p1[0];
      p2 = p2[0];

      imgOneSrc = $(p1).attr("src");
      imgTwoSrc = $(p2).attr("src");

      if (imgOneSrc !== imgTwoSrc) {
        setTimeout(function() {
          p1.style.opacity = "0";
          p2.style.opacity = "0";
        }, 700);
      }
      cardPair.length = 0;
      event.preventDefault();
    }
  });
  //show dialog
  $(".instructions").on("click", function() {
    $("#dialog").dialog({
      position: { my: "left top", at: "left top" },
      width: "auto",
      create: function(event, ui) {
        $(this).css("maxWidth", "600px");
      }
    });
  });

  //-END-//
});
