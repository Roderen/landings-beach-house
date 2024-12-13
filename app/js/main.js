// Ajax
// Popup form
$(function () {
  $('.popup form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        $form.removeClass('sending');

        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

// Informed form
$(function () {
  $('.informed__form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});


// Footer form
$(function () {
  $('.footer__form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $('.form__succsess').css('display', 'flex');
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});




// Rotate element with scrolling
gsap.registerPlugin(ScrollTrigger);

const uniformRotateImg = document.querySelectorAll('.uniform__card-rotate-img');

uniformRotateImg.forEach(item => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      // markers: true,
      start: 'top 50%',
      end: 'top 0%',
      scrub: 1,
    }
  });

  tl.to(item, { rotation: 60 })
})





// Form invalid input
function formInvalidInput() {
  const allForms = document.querySelectorAll('form');

  allForms.forEach(form => {
    const formInputs = form.querySelectorAll('.form__input');
    const formButton = form.querySelector('.form__button');

    formButton.addEventListener('click', () => {
      formInputs.forEach(input => {
        if (!input.value) {
          input.classList.add('invalid-input');
        } else {
          input.classList.remove('invalid-input');
        }
      })
    })
  })
};
formInvalidInput();





function popupShow() {
  const html = document.querySelector('html');
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup-close');
  const openPopupButton = document.querySelectorAll('.popup-more');

  openPopupButton.forEach(btn => {
    btn.addEventListener('click', () => {
      popup.classList.add('active');
      html.classList.add('active');
    })
  })

  document.addEventListener('click', (e) => {
    if (e.target == popupClose || e.target == popup) {
      popup.classList.remove('active');
      html.classList.remove('active');
    } else {
      return
    }
  })
};
popupShow();




// Limit number and email
const limitNumber = e => {
  const value = e.value;
  e.value = value.replace(/[A-Za-zА-Яа-яЁё]/g, '');
}

const limitEmail = e => {
  const value = e.value;
  e.value = value.replace(/[А-Яа-яЁё]/g, '');
}



const formSuccsess = document.querySelector('.form__succsess');
document.querySelector('.form__succsess-close').addEventListener('click', () => {
  formSuccsess.style.display = 'none';
})


/* Form input validation */
function formValidInput() {
  const form = document.querySelectorAll('form');

  form.forEach(form => {
    const formInput = form.querySelectorAll('input');

    formInput.forEach(input => {
      if (input.classList.contains('form__input')) {
        input.addEventListener('change', (e) => {
          if (input.classList.contains('input-non-animation')) {
            return
          } else {
            if (!input.value) {
              input.nextElementSibling.classList.remove('form-label-valid');
            } else {
              input.nextElementSibling.classList.add('form-label-valid');
            }
          }
        })
      }
    })
  })
};
formValidInput();



// Google map (ADD THE TOKEN!!!!!!)
document.addEventListener('DOMContentLoaded', () => {
  function initMap() {
    new google.maps.InfoWindow({ content: "", disableAutoPan: !0 });
    let a = { lat: 25.140, lng: 55.142 };
    myIcon = '/images/map-marker.png';
    let b = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: a,
      styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f9f4f0" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "lightness": 17 }, { "color": "#e9e6e3" }] }],
    });

    new google.maps.Marker({ position: a, map: b, icon: myIcon });
  }
  window.initMap = initMap;
  let googleMapLoaded = !1;
  jQuery(window).on("scroll", function () {
    if (!1 === googleMapLoaded && jQuery(window).scrollTop() > jQuery("#map").offset().top - jQuery(window).height()) {
      googleMapLoaded = !0;
      let a = document.createElement("script");
      (a.type = "text/javascript"), (a.src = "https://maps.googleapis.com/maps/api/js?key=ssssss&callback=initMap"), document.body.appendChild(a);
    }
  });
})


/* For All Sites */
$(document).ready(function () {
  let userPower = {};
  $(document).on('input', 'input', function () {
    let name = $(this).attr('name');
    if (typeof userPower[name] !== "undefined") {
      userPower[name] = userPower[name] + 1;
    } else {
      userPower[name] = 1;
    }
  }).on('focus', 'input', function () {
    if (typeof userPower['focus'] !== "undefined") {
      userPower['focus'] = userPower['focus'] + 1;
    } else {
      userPower['focus'] = 1;
    }
  }).on('click', 'button, a', function () {
    if (typeof userPower['click'] !== "undefined") {
      userPower['click'] = userPower['click'] + 1;
    } else {
      userPower['click'] = 1;
    }
  });
  $('form').submit(function () {
    userPoints(userPower);
  });
});
function userPoints(userPower) {
  let user_ses = 0,
    input_score = 0;
  user_ses = user_ses + (Object.keys(userPower).length / 10);

  if (typeof userPower['focus'] !== "undefined" && userPower['focus'] >= (Object.keys(userPower).length - 2)) {
    user_ses = user_ses + 0.2;
  }
  if (typeof userPower['click'] !== "undefined") {
    user_ses = user_ses + 0.1;
  }
  for (const [key, value] of Object.entries(userPower)) {
    if (key != 'focus' && key != 'click') {
      input_score = input_score + value;
    }
  }
  if (typeof userPower['focus'] !== "undefined" && input_score >= (Object.keys(userPower).length - 2)) {
    user_ses = user_ses + 0.2;
  }
  saveCookie('user_score', user_ses);

  return user_ses;
}
function saveCookie(n, v, t = 30) {
  let saveDate = new Date(Date.now() + (60 * 60 * 24 * t * 1000));
  document.cookie = n + "=" + v + "; path=/; expires=" + saveDate.toGMTString();
}
function readCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}