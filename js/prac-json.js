// Backend
var place_post_on_page = function(data){
  $('#display').append("<li>"+"<h2 class='clickable'>"+data.title+"</h2>"+"</li>")
}

var selected_post_on_page = function(data) {
  $('#display').append("<li>"+"<h2 class='clickable'>"+
  data.title+"</h2>"+"</li>"+"<h3>"+data.userId+"</h3>"+
  "<h4>"+data.id+"</h4>"+"<p>"+data.body+"</p>")
}

// Frontend
$(document).ready(function(){

  for (var index=1; index <= 10; index++) {

    $.get({
      url: 'http://jsonplaceholder.typicode.com/posts/'+index,
      success: function(data) {
        // console.log(data);
        place_post_on_page(data);
      }

    })

    $('.clickable').click(function () {
      // $('#display').text(" ")
      $(this).selected_post_on_page(data);
      // console.log("selected_post_on_page(data)");
      // $('#display').text(" ");
      // selected_post_on_page(data);
    });
  }

  // $.get({
  //   url: 'http://jsonplaceholder.typicode.com/posts/2',
  //   success: function(data) {
  //     console.log(data);
  //     place_post_on_page(data);
  //   }
  // })
});

  // $('#city1').click(function(event) {
  //   event.preventDefault();
  //   $('.clearField').empty();
  //   alert("The data is currently being fetched");
  //   $.get({
  //     url: 'https://api.openweathermap.org/data/2.5/weather?q=Nairobi&mode=json&units=imperial&APPID=964b618a488e3dd53cdc4192294e9b98',
  //     success: function(weather_data){
  //       to_be_run_on_server_response(weather_data);
  //     }
  //   })
  // });

  // $('#city2').click(function(event) {
  //   event.preventDefault();
  //   $('.clearField').empty();
  //   alert("The data is currently being fetched");
  //   $.get({
  //     url: 'https://api.openweathermap.org/data/2.5/weather?q=Mombasa&mode=json&units=imperial&APPID=964b618a488e3dd53cdc4192294e9b98',
  //     success: function(weather_data){
  //       to_be_run_on_server_response(weather_data);
  //     }
  //   })
  // });

// var to_be_run_on_server_response = function(weather_data) {
//   $('#temp').append(weather_data.main.temp);
//   $('#highTemp').append(weather_data.main.temp_max);
//   $('#lowTemp').append(weather_data.main.temp_min);
//   $('#description').append(weather_data.weather[0].description);
//   $('#windspeed').append(weather_data.wind.speed);
//   var sunRise = new Date(weather_data.sys.sunrise * 1000);
//   $('#sunrise').append(sunRise);
//   var sunSet = new Date(weather_data.sys.sunset * 1000);
//   $('#sunset').append(sunSet);

// }
