'use strict';

$(document).ready(function() {
  $('#calculate').click(calcTrip);
});

var totalMiles;
var carMpg;
var carTank;
var gasPrice;

function calcTrip() {
  totalMiles = $('#distance').val();
  carMpg = $('#carmpg').val();
  carTank = $('#cartank').val();
  gasPrice = $('#gascost').val();
  console.log(totalMiles);
  console.log(carMpg);
  console.log(carTank);
  console.log(gasPrice);

  var miPerTank = carTank * carMpg;
  var tankCost = carTank * gasPrice;
  console.log('mile per tank: ' + miPerTank);
  console.log('tank cost: ' + tankCost);
  var stops = Math.ceil(totalMiles / miPerTank);
  console.log('stops: ' + stops);
  $('.stops').text('number of stops: ' + stops);

  var totalGal = totalMiles / carMpg;
  var totalCost = totalGal * gasPrice;
  console.log('total galloons need: ' + totalGal);
  console.log('total cost of trip: ' + totalCost);
  $('.totalcost').text('total cost of trip: $' + totalCost);

  var newTotalMiles = stops * miPerTank;
  var diffInMiles = newTotalMiles - totalMiles;
  var gasLeft = diffInMiles / carMpg;
  console.log('gas remaining: ' + gasLeft);
  $('.gasleft').text('gas left after arriving: ' + gasLeft + ' gal');
}
