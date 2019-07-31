
//all imports should be at the top, import config to access the api keyboard
import Config from '../../config.js';


let config = new Config();

const API_KEY = config.getKey();



function loadNavbar(response){
  $('header').html(response);

}

$.get('./components/header.html', loadNavbar);




//create a function for the form when submitted
$('#submit-btn').click(function(e) {
  e.preventDefault();
  let city = $('#city_search').val();


  //MAKE THE HEADER FOR THE INFO SECTION THE CITY VALUE

  //store url for call

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`

  //use jquery to send a call for the current weather data

  $.get(url, function(response) {
    console.log(response)

    $('#city_name').text(`${response.name}, ${response.sys.country}`);
    $('#high').html(`${response.main.temp_max.toFixed(0)}&#8457;`);
    $('#low').html(`${response.main.temp_min.toFixed(0)}&#8457;`);
    $('#forecast').text(`${response.weather[0].main}`);
    $('#humidity').text(`${response.main.humidity}%`);

  });

  //show weather info card

  $('#weather-info').css('display','block');

});


//hide the weather info section immediately on load

$('#weather-info').css('display','none')
