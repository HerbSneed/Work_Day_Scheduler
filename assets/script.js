$(function(event) {
  var buttonClick = $('.saveBtn');

  buttonClick.on('click', function(event){
  event.preventDefault();

  var nineAm = $('#hour-9').children().eq(1).val().trim();
  var tenAm = $('#hour-10').children().eq(1).val().trim();
  var elevenAm = $('#hour-11').children().eq(1).val().trim();
  var twelvePm = $('#hour-12').children().eq(1).val().trim();
  var onePm = $('#hour-01').children().eq(1).val().trim();
  var twoPm = $('#hour-02').children().eq(1).val().trim();
  var threePm = $('#hour-03').children().eq(1).val().trim();
  var fourPm = $('#hour-04').children().eq(1).val().trim();
  var fivePm = $('#hour-05').children().eq(1).val().trim();
  
  var toDos = [
    nineAm,
    tenAm,
    elevenAm,
    twelvePm,
    onePm,
    twoPm,
    threePm,
    fourPm,
    fivePm
  ];
  localStorage.setItem('Task', JSON.stringify(toDos));
  renderTask();
  });

  function renderTask() {
    var lastTask = JSON.parse(localStorage.getItem('Task'));
    if (lastTask !== null) {
      nineAm.val() = toDos[0];
      console.log(toDos[0]);

    }
  }

  var today = dayjs();
  if (today.hour() > 9) {
    $('#root').children().eq(0).addClass('past');
  }else if (today.hour() < 9) {
    $('#root').children().eq(0).addClass('future');
  }else if (today.hour() === 9){
    $('#root').children().eq(0).addClass('present');
  }

  if (today.hour() > 10) {
    $('#root').children().eq(1).addClass('past');
  }else if (today.hour() < 10) {
    $('#root').children().eq(1).addClass('future');
  }else if (today.hour() === 10){
    $('#root').children().eq(1).addClass('present');
  }

  if (today.hour() > 11) {
    $('#root').children().eq(2).addClass('past');
  }else if (today.hour() < 11) {
    $('#root').children().eq(2).addClass('future');
  }else if (today.hour() === 11){
    $('#root').children().eq(0).addClass('present');
  }

  if (today.hour() > 12) {
    $('#root').children().eq(3).addClass('past');
  }else if (today.hour() < 12) {
    $('#root').children().eq(3).addClass('future');
  }else if (today.hour() === 12){
    $('#root').children().eq(3).addClass('present');
  }

  if (today.hour() > 13) {
    $('#root').children().eq(4).addClass('past');
  }else if (today.hour() < 13) {
    $('#root').children().eq(4).addClass('future');
  }else if (today.hour() === 13){
    $('#root').children().eq(4).addClass('present');
  }

  if (today.hour() > 14) {
    $('#root').children().eq(5).addClass('past');
  }else if (today.hour() < 14) {
    $('#root').children().eq(5).addClass('future');
  }else if (today.hour() === 14){
    $('#root').children().eq(5).addClass('present');
  }

  if (today.hour() > 15) {
    $('#root').children().eq(6).addClass('past');
  }else if (today.hour() < 15) {
    $('#root').children().eq(6).addClass('future');
  }else if (today.hour() === 15){
    $('#root').children().eq(6).addClass('present');
  }

  if (today.hour() > 16) {
    $('#root').children().eq(7).addClass('past');
  }else if (today.hour() < 16) {
    $('#root').children().eq(7).addClass('future');
  }else if (today.hour() === 16){
    $('#root').children().eq(7).addClass('present');
  }

  if (today.hour() > 17) {
    $('#root').children().eq(8).addClass('past');
  }else if (today.hour() < 17) {
    $('#root').children().eq(8).addClass('future');
  }else if (today.hour() === 17){
    $('#root').children().eq(8).addClass('present');
  }


  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?


  $('#currentDay').text(today.format('MMM D, YYYY'));

});