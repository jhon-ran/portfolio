$(document).ready(function(){
  console.log('Funcionando');

  txt = $("div.card p.card-text").text();
  console.log(txt);

  $("#filter").on("keyup", function() {
    var g = $(this).val().toLowerCase();
    $("div.card p.card-text").each(function() {
        var s = $(this).text().toLowerCase();
        $(this).closest('.card-text')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
  });

});