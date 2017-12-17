$(document).ready(function() {
  let clicks = 0;
  let cardPair = [];

  let icons = [
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/one.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/two.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/three.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/four.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/five.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/six.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/seven.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/eight.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/one.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/two.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/three.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/four.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/five.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/six.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/seven.png?raw=true",
    "https://github.com/zmunetsi/memory-game/blob/master/images/icons/eight.png?raw=true"
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
          '<div class= "block col-xs-3 col-sm-3"><img class = "icon img img-fluid img-responsive" src =' +
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
    location.reload(true);
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
