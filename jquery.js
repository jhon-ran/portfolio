jQuery(document).ready(function($){
  $("#filter").on("keyup", function() {
    var g = $(this).val().toLowerCase();
    $(".card .card-text p").each(function() {
        var s = $(this).text().toLowerCase();
        $(this).closest('.card')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
  });
});