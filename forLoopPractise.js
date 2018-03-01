let vacationSpots = ["California", "Toronto", "Paris"];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++ ) {
  console.log ("I would love to visit " + vacationSpots[vacationSpotIndex]);
}

//forLoops backwards

let vacationSpots = ["California", "Toronto", "Paris"];

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) 
{
  //Because arrays start counting at 0, the start condition needs to be the length of the vacationSpots array minus 1.
  console.log ("I would love to visit " + vacationSpots[vacationSpotIndex]);
}
