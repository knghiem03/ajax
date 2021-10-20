'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  $.get('/fortune', resp => {
    $('#fortune-text').html(resp);
    //only .html works for thise because of the html formatting that gets returned by the functin.
  });
  
}

$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = {zipcode: $('#zipcode-field').val()};

  $.get('/weather.json', formData, resp => {
    //either way works bt if using the [] you need to use the "" around forecast.
    //alert(resp.forecast);
    alert(resp["forecast"]);
  });
}

$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$('#order-form').on('submit', orderMelons);
