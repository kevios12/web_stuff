// import our scss
import '../scss/style.scss'
//import all Bootstrap
import * as bootstrap from 'bootstrap'
import $ from 'jquery';
window.$ = $;

//smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//scroll to top
$(document).ready(function(){
  $("button").click(function(){
    $(".to-top").toggle();
  });
});