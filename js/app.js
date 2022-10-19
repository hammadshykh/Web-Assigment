$(function () {
  $(".slider-content").slick({
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
  });
});
$(document).ready(function () {
  $(".sidenav").sidenav();
});
let coreect = true;
document.querySelector(".show").addEventListener("click", function (e) {
  e.preventDefault();
  if (coreect) {
    $(".show").text("close");
    $(".hidden").toggle(200);
    coreect = false;
  } else {
    $(".show").text("More Details");
    $(".hidden").toggle(200);
    coreect = true;
  }
});

$({ Counter: 0 }).animate(
  {
    Counter: $(".single").text(),
  },
  {
    duration: 2000,
    easing: "swing",
    step: function () {
      $(".single").text(Math.ceil(this.Counter));
    },
  }
);
$({ Counter: 0 }).animate(
  {
    Counter: $(".1st").text(),
  },
  {
    duration: 3000,
    easing: "swing",
    step: function () {
      $(".1st").text(Math.ceil(this.Counter));
    },
  }
);
$({ Counter: 0 }).animate(
  {
    Counter: $(".2nd").text(),
  },
  {
    duration: 3000,
    easing: "swing",
    step: function () {
      $(".2nd").text(Math.ceil(this.Counter));
    },
  }
);
$({ Counter: 0 }).animate(
  {
    Counter: $(".3rd").text(),
  },
  {
    duration: 3000,
    easing: "swing",
    step: function () {
      $(".3rd").text(Math.ceil(this.Counter));
    },
  }
);
