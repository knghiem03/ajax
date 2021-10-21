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
// 
// function orderMelons(evt) {
//   evt.preventDefault();

//   const formData = {
//     //keys here need to be the "name" in the html inputs, can't just make up variables
//     qty: $('#qty-field').val(),
//     melon_type: $('#melon-type-field').val(),
//   };

//   $.post('/order-melons.json', formData, resp =>{
    
//     if (resp.code === 'ERROR'){
//       $('#order-status').addClass('order-error');
//       $('#order-status').text(resp.msg);
//     }
//     else{
//       // Need to use removeClass, otherwise, correct qty would still resulted in in red.
//       $('#order-status').removeClass('order-error');
//       $('#order-status').text(resp.msg);
//     }
//   }); 

//   // TODO: show the result message after your form
//   // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
  
// }

// $('#order-form').on('submit', orderMelons);


$('#order-form').on('submit', evt => {
  evt.preventDefault();

  const formData = {
    //keys here need to be the "name" in the html inputs, can't just make up variables
    qty: $('#qty-field').val(),
    melon_type: $('#melon-type-field').val(),
  };

  $.post('/order-melons.json', formData, resp =>{
    
    if (resp.code === 'ERROR'){
      $('#order-status').addClass('order-error');
      $('#order-status').text(resp.msg);
    }
    else{
      // Need to use removeClass, otherwise, correct qty would still resulted in in red.
      $('#order-status').removeClass('order-error');
      $('#order-status').text(resp.msg);
    }
  }); 
  
});

// $('#order-form').on('submit', orderMelons);
