$(document).ready(function() {
  $("#term1").click(function() {
    $(this).toggle();
    $("#def1").toggle();
  });

  $("#def1").click(function() {
    $(this).toggle();
    $("#term1").toggle();
  });

  $("#term2").click(function() {
    $(this).toggle();
    $("#def2").toggle();
  });

  $("#def2").click(function() {
    $(this).toggle();
    $("#term2").toggle();
  });

  $("#term3").click(function() {
    $(this).toggle();
    $("#def3").toggle();
  });

  $("#def3").click(function() {
    $(this).toggle();
    $("#term3").toggle();
  });


});
