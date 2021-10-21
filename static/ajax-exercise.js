'use strict';

// PART 1: SHOW A FORTUNE

$('#get-fortune-button').on('click', () => {
  // TODO: get the fortune and show it in the #fortune-text div
  $.get('/fortune', resp => {
    $('#fortune-text').html(resp);
    //only .html works for thise because of the html formatting that gets returned by the functin.
  });
  
});

// $('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

$('#weather-form').on('submit',  evt => {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = {zipcode: $('#zipcode-field').val()};

  $.get(url, formData, resp => {
    //either way works bt if using the [] you need to use the "" around forecast.
    //alert(resp.forecast);
    //alert(resp["forecast"]);
    $('#weather-info').html(resp.forecast);
  });
});

//$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

// $('#order-form').on('submit', evt => {
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

// });


$('#order-form').on('submit', evt => {
  evt.preventDefault();
  // Instead of creating the formData manually, call serialize to do the works
  const formData = $('#order-form').serialize();
  $.post('/order-melons.json', formData, resp => {
    
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
