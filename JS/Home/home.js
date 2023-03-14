$(function () {
  /* Home start */

  const toggle = $("nav");
  const click = $(".click");
  const cancel = $("#times");
  const dropdown = $(".dropdown");
  const dropdown2 = $(".d-d-down");
  let btn = $(".home-start-3-btn");
  $(btn[1]).click(function () {
    window.location = "#menu";
  });
  $(btn[0]).click(function () {
    window.location = "#reservation";
  });
  $(btn[2]).click(function () {
    window.location = "#reservation";
  });
  $(dropdown).click(function () {
    $(".d-down").css({
      display: "block",
    });
  });

  $(".d-down").mouseleave(function () {
    $(".d-down").css({
      display: "none",
    });
  });
  $(dropdown2).click(function () {
    $(".deep-drop-downs").css({
      display: "block",
    });
  });

  $(".deep-drop-downs").mouseleave(function () {
    $(".deep-drop-downs").css({
      display: "none",
    });
  });

  click.click(function () {
    toggle.addClass("toggle");
  });

  cancel.click(function () {
    toggle.removeClass("toggle");
  });

  $(".home-circle-play")
    .first()
    .click(function () {
      const s = confirm("Videoga o'tilsinmi ?");

      if (s) {
        window.location = "https://youtube.com";
      } else {
        window.location = "#";
      }
    });

  let off = $(".home-two-line").offset().top;
  $(window).scroll(function () {
    let scrol = $(window).scrollTop();
    if (scrol > off) {
      $(".home-two-line").css({
        transition: "all 1s",
        position: "fixed",
        "border-bottom": "1px solid gray",
      });
      $(".home-first-line").css({
        "margin-top": "-45px",
        transition: "all 1s",
      });
    } else {
      $(".home-two-line").css({
        transition: "all 1s",
        position: "static",
        "border-bottom": "none",
      });
      $(".home-first-line").css({
        "margin-top": "0px",
        transition: "all 1s",
      });
    }
  });

  function Deletes() {
    document
      .querySelectorAll(".navbar li")
      .forEach(function (value, index, array) {
        value.classList.remove("active");
      });
  }

  document
    .querySelectorAll(".navbar li")
    .forEach(function (value, index, array) {
      array[index].addEventListener("click", function () {
        Deletes();
        array[index].classList.add("active");
      });
    });

  

  /* Home end */

  /* Menu start */

  let tab = $(".menyu");
  let tabcontent = $(".tabcontent");
  tab.click(function () {
    Menu_tab();
    $(this).addClass("actives");
    let al = $(this).html();
    if (al == "All") {
      $(".card").css({
        display: "flex",
      });
    } else if (al == "Starters") {
      $(".st").css({
        display: "flex",
      });
    } else if (al == "Salads") {
      $(".sa").css({
        display: "flex",
      });
    } else if (al == "Specialty") {
      $(".sp").css({
        display: "flex",
      });
    }
  });

  function Menu_tab() {
    $(tab).removeClass("actives");
    $(".card").css({
      display: "none",
    });
  }
  /* Menu end */

  /* Specials start */

  const specialsTab = $(".specials-tab");
  const specialsTabcontent = $(".specials-tabcontent");

  function SpecialaActive() {
    document
      .querySelectorAll(".specials-tab")
      .forEach(function (value, index, array) {
        value.classList.remove("specials-active");
        $(specialsTabcontent).css({
          display: "none",
        });
      });
  }
  $(specialsTabcontent).css({
    display: "none",
  });
  $(specialsTabcontent[0]).css({
    display: "flex",
  });

  document
    .querySelectorAll(".specials-tab")
    .forEach(function (value, index, array) {
      array[index].addEventListener("click", function () {
        SpecialaActive();
        array[index].classList.add("specials-active");
        $(specialsTabcontent[index]).css({
          display: "flex",
        });
      });
    });

  /* Specials end */

  /* Events start */

  const eventsCard = $(".events-card");
  const eventsDots = $(".events-dot");
  function eventsNone() {
    $(eventsCard).css({
      display: "none",
    });
    for (let a = 0; a < eventsDots.length; a++) {
      $(eventsDots[a]).removeClass("activ");
    }
  }

  eventsNone();
  $(eventsCard[0]).css({
    display: "flex",
  });
  $(eventsDots[0]).addClass("activ");

  for (let i = 0; i < eventsCard.length; i++) {
    $(eventsDots[i]).click(function () {
      eventsNone();
      $(eventsCard[i]).css({
        display: "flex",
      });
      $(eventsDots[i]).addClass("activ");
    });
  }

  let eventsSon = 0;
  setInterval(function () {
    if (eventsSon < 3) {
      eventsNone();
      $(eventsCard[eventsSon]).css({
        display: "flex",
      });
      $(eventsDots[eventsSon]).addClass("activ");

      eventsSon++;

      if (eventsSon == 3) {
        eventsSon = 0;
      }
    }
  }, 5000);

  /* Events end */

  /* Testimonials start */

  const testimonialsCards = $(".t-card");
  const testimonialsDots = $(".t-dot");

  function Del() {
    for (let i = 0; i < testimonialsCards.length; i++) {
      $(testimonialsCards[i]).css({
        display: "none",
      });
      $(testimonialsDots[i]).removeClass("t-active");
    }
  }
  Del();

  $(testimonialsCards[0]).css({
    display: "flex",
  });

  $(testimonialsCards[1]).css({
    display: "flex",
  });

  $(testimonialsCards[2]).css({
    display: "flex",
  });
  $(testimonialsDots[0]).addClass("t-active");

  for (let i = 0; i < testimonialsDots.length; i++) {
    $(testimonialsDots[i]).click(function () {
      if (i != 5) {
        if (i == 0) {
          Del();
          $(testimonialsDots[0]).addClass("t-active");
          $(testimonialsCards[0]).css({
            display: "flex",
          });

          $(testimonialsCards[1]).css({
            display: "flex",
          });

          $(testimonialsCards[2]).css({
            display: "flex",
          });
        } else if (i == 1) {
          Del();
          $(testimonialsDots[1]).addClass("t-active");
          $(testimonialsCards[1]).css({
            display: "flex",
          });

          $(testimonialsCards[2]).css({
            display: "flex",
          });

          $(testimonialsCards[3]).css({
            display: "flex",
          });
        } else if (i == 2) {
          Del();
          $(testimonialsDots[2]).addClass("t-active");
          $(testimonialsCards[2]).css({
            display: "flex",
          });

          $(testimonialsCards[3]).css({
            display: "flex",
          });

          $(testimonialsCards[4]).css({
            display: "flex",
          });
        } else if (i == 3) {
          Del();
          $(testimonialsDots[3]).addClass("t-active");
          $(testimonialsCards[3]).css({
            display: "flex",
          });

          $(testimonialsCards[4]).css({
            display: "flex",
          });

          $(testimonialsCards[0]).css({
            display: "flex",
          });
        } else if (i == 4) {
          Del();
          $(testimonialsDots[4]).addClass("t-active");
          $(testimonialsCards[4]).css({
            display: "flex",
          });

          $(testimonialsCards[0]).css({
            display: "flex",
          });

          $(testimonialsCards[1]).css({
            display: "flex",
          });
        }
      }
    });
  }

  let tSon = 0;
  setInterval(function () {
    if (tSon < 5) {
      if (tSon == 0) {
        Del();
        $(testimonialsDots[0]).addClass("t-active");
        $(testimonialsCards[0]).css({
          display: "flex",
        });

        $(testimonialsCards[1]).css({
          display: "flex",
        });

        $(testimonialsCards[2]).css({
          display: "flex",
        });
      } else if (tSon == 1) {
        Del();
        $(testimonialsDots[1]).addClass("t-active");
        $(testimonialsCards[1]).css({
          display: "flex",
        });

        $(testimonialsCards[2]).css({
          display: "flex",
        });

        $(testimonialsCards[3]).css({
          display: "flex",
        });
      } else if (tSon == 2) {
        Del();
        $(testimonialsDots[2]).addClass("t-active");
        $(testimonialsCards[2]).css({
          display: "flex",
        });

        $(testimonialsCards[3]).css({
          display: "flex",
        });

        $(testimonialsCards[4]).css({
          display: "flex",
        });
      } else if (tSon == 3) {
        Del();
        $(testimonialsDots[3]).addClass("t-active");
        $(testimonialsCards[3]).css({
          display: "flex",
        });

        $(testimonialsCards[4]).css({
          display: "flex",
        });

        $(testimonialsCards[0]).css({
          display: "flex",
        });
      } else if (tSon == 4) {
        Del();
        $(testimonialsDots[4]).addClass("t-active");
        $(testimonialsCards[4]).css({
          display: "flex",
        });

        $(testimonialsCards[0]).css({
          display: "flex",
        });

        $(testimonialsCards[1]).css({
          display: "flex",
        });
      }
      if (tSon == 4) {
        tSon = -1;
      }
      tSon++;
    }
  }, 5000);
  /* Testimonials end */


  let about = $("#about").offset().top;
  let why = $(".why-us").offset().top;
  let menu = $("#menu").offset().top;
  let sps = $("#specials").offset().top;
  let events = $("#events").offset().top;
  let res = $("#reservation").offset().top;
  let test = $("#testimonials").offset().top;
  let gal = $("#gallery").offset().top;
  let chefs = $("#chefs").offset().top;
  let contact = $("#contact").offset().top;
  let footer = $(".footer").offset().top;
  let end = $(".end").offset().top;

  function Delet(){
    $(".navbar li").removeClass("active");
  }


  $(window).scroll(function(){
    let win = $(window).scrollTop();
    if(win<about){
      Delet();
      $(".navbar #homee").addClass("active");
    }
    if (win > about - 650) {
      if(about > win){
        Delet();
        $(".navbar .aboutt").addClass("active")
      }
      else{
        Delet();
        $(".navbar .homee").addClass("active");
      }
      
      $("#about .about-color .about-start, #about .about-color .about-end").css(
        {
          animation: "All_animate 2s",
        }
        
      );
    }
    if (win > why - 650) {
      if (why > win) {
        Delet();
        $(".navbar #menuu").addClass("active");
      } else {
        Delet();
        $(".navbar #homee").addClass("active");
      }
      $(".why-us-head, .why-us-h1, .why-us-cards").css(
        {
          animation: "All_animate 2s",
        }
      );
    }
    if (win > menu - 650) {
      if (menu > win) {
        Delet();
        $(".navbar #menuu").addClass("active");
      } else {
        Delet();
        $(".navbar #homee").addClass("active");
      }
      $(".menu-head, .menu-head-h1, .menu-tabs, .menu-tabcontents").css(
        {
          animation: "All_animate 2s",
        }
      );
    }
    if (win > sps - 650) {
      if (sps > win) {
        Delet();
        $(".navbar #specialss").addClass("active");
      } else {
        Delet();
        $(".navbar #homee").addClass("active");
      }
      $(".specials-head, .specials-head-h1, .specials-t").css({
        animation: "All_animate 2s",
      });
    }
    if (win > events - 650) {
      if (events > win) {
        Delet();
        $(".navbar #eventss").addClass("active");
      } else {
        Delet();
        $(".navbar #homee").addClass("active");
      }
      $(".events-head, .events-head-h1, .events-cards, .events-dots").css({
        animation: "All_animate 2s",
      });
    }
    if (win > res - 650) {
      $(".reservation-head, .reservation-head-h1, .reservation-form, .reservation-message, .reservation-btn").css({
        animation: "All_animate 2s",
      });
    }
    if (win > test - 650) {
      $(".t-head, .t-head-h1, .t-cards, .t-dots").css({
        animation: "All_animate 2s",
      });
    }
    if (win > gal - 650) {
      if (gal > win) {
        Delet();
        $(".navbar #galleryy").addClass("active");
      } else {
        Delet();
        $(".navbar #homee").addClass("active");
      }
      $(".gallery-head, .gallery-head-h1, .gallery-images").css({
        animation: "All_animate 2s",
      });
    }
    if (win > chefs - 650) {
      if (chefs > win) {
        Delet();
        $(".navbar #chefss").addClass("active");
      } else {
        Delet();
        $(".navbar #homee").addClass("active");
      }
      $(".chefs-head, .chefs-head-h1, .chefs-cards").css({
        animation: "All_animate 2s",
      });
    }
    if (win > contact - 650) {
      if (contact > win) {
        Delet();
        $(".navbar #contactt").addClass("active");
      } else {
        Delet();
        $(".navbar #homee").addClass("active");
      }
      $(".contact-head, .contact-head-h1, .contact-maps, .contact-end").css({
        animation: "All_animate 2s",
      });
    }
    if (win > footer - 650) {
       if (footer > win) {
         Delet();
         $(".navbar #contactt").addClass("active");
       } else {
         Delet();
         $(".navbar #homee").addClass("active");
       }
      $(".f-one, .f-two, .f-four").css({
        animation: "All_animate 2s",
      });
    }
    if (win > end - 550) {
      if (end > win) {
        Delet();
        $(".navbar #contactt").addClass("active");
      } else {
        Delet();
        $(".navbar #homee").addClass("active");
      }
      $(".end .text-1, .end .text-2").css({
        animation: "All_animate 2s",
      });
    } 
  })


  $(".f-two .topbar li").click(function(){
    window.location = "#";
  })


});
