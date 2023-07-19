// Sets up a variable currentDay and sets it as the day, and then applies that to in a specified format to the page in the p attribute with id #currentDay
var currentDay = dayjs();
$('#currentDay').text(currentDay.format('dddd, MMMM D YYYY'));

// The overall jQuery DOM
$(document).ready(function () {

  // This tells the page to save the information typed into the classes .description upon clicking the save button
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');
    
    // This sets whatever typed into the description fields to the local storage
    localStorage.setItem(key, value);
  });

  //This is the function to overall control tracking the time of day, as well as applying new classes to the html to apply the background coloring depending on if it's a past, current, or future time 
  function timeTracker () {

    // This is the variable that gets the hour of the day
    var currentTime = dayjs().hour();

    // This selects items with the class .time-block and further selects items that have an "hour-" in the div id of the time blocks
    $('.time-block').each(function() {
      var blockTime = parseInt($(this).attr('id').split('hour-')[1]);

      // This if/else statement dictates that depending on which hour of the day compares to the block time in the div id, that they need to remove and add class elements to effect the background color styling
      if (blockTime < currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
      } else if (blockTime === currentTime) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }
    });
  }

  // This keeps and gets the items typed into the descriptions from the local storage to the page upon refreshing the page on the browser, using their saved status
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // This just calls the timeTracker function to act
  timeTracker();

});
