var wishes = ['Wish you a Merry Christmas and may this festival bring abundant joy and happiness in your life!',
  'Love, Peace and Joy came down on earth on Christmas day to make you happy and cheerful. May Christmas spread cheer in your lives!',
  'This holiday season, May you and your family be blessed with, Good health, happiness and wealth, Merry Christmas! And a happy new year!',
  'It is that time of the year again, when you are thankful for everything merry and bright. May this Christmas be a delight! Wishing you a Merry Christmas!',
  'May the good times and treasures of the present become the golden memories of tomorrow. Wish you lots of love, joy and happiness. MERRY CHRISTMAS!',
  'Joy and love are all around us during the holidays and I want to spread them to you, my friend. Merry Christmas!',
  'Here’s to good friends, a loving family and laughter during this Christmas season! Merry Christmas and a joyful New Year!',
  'Merry Christmas, baby!',
  'Sending the warmest Christmas wishes to you and your family. May God shower his choicest blessings on you and your family this Christmas!'];

$(window).ready(function () {

  var carousel = $('.carousel');
  //init carousel and pause
  carousel.carousel();
  carousel.carousel('pause');

  //fade in next
  $('.next').fadeIn(3000);

  carousel.on('slide.bs.carousel', function () {
    $('.next2').fadeIn(3000);
  });

  //go to next and pause
  $('.next, .next2').click(function () {
    carousel.carousel('next').carousel('pause');
  });

  //restart and pause
  $('#restart').click(function () {
    carousel.carousel(0);
  });

  //load random wish
  $('#wishAgain').click(function () {
    var wish = wishes[Math.floor(Math.random() * wishes.length)];
    $('#wish').text(wish);
  });

});
