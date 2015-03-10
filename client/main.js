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

  var miPerTank = carTank * carMpg;
  var tankCost = carTank * gasPrice;
  console.log('mile per tank: ' + miPerTank);
  console.log('tank cost: ' + tankCost);
  var stops = Math.ceil(totalMiles / miPerTank);
  console.log('stops: ' + stops);
  $('.stops').text('Total number of stops: ' + stops);

  var totalGal = (totalMiles / carMpg).toFixed(2);
  var totalCost = (totalGal * gasPrice).toFixed(2);
  console.log('total galloons need: ' + totalGal);
  console.log('total cost of trip: ' + totalCost);
  $('.totalcost').text('Total gas cost of the trip: $' + totalCost);
  $('.gasneed').text('Total gallons of gas needed for whole trip: ' + totalGal + ' gal');

  var newTotalMiles = stops * miPerTank;
  var diffInMiles = newTotalMiles - totalMiles;
  var gasLeft = (diffInMiles / carMpg).toFixed(2);
  console.log('gas remaining: ' + gasLeft);
  $('.gasleft').text('Gas left after arriving at destination: ' + gasLeft + ' gal');
}
