$(document).ready(function() {
  var url1 = $("#yt1").attr('src');
  $("#modalYT1").on('hide.bs.modal', function() {
    $("#yt1").attr('src', '');
  });
  $("#modalYT1").on('show.bs.modal', function() {
    $("#yt1").attr('src', url1);
  });

  var url2 = $("#yt2").attr('src');
  $("#modalYT2").on('hide.bs.modal', function() {
    $("#yt2").attr('src', '');
  });
  $("#modalYT2").on('show.bs.modal', function() {
    $("#yt2").attr('src', url2);
  });

  var url3 = $("#yt3").attr('src');
  $("#modalYT3").on('hide.bs.modal', function() {
    $("#yt3").attr('src', '');
  });
  $("#modalYT3").on('show.bs.modal', function() {
    $("#yt3").attr('src', url3);
  });

  var url4 = $("#yt4").attr('src');
  $("#modalYT4").on('hide.bs.modal', function() {
    $("#yt4").attr('src', '');
  });
  $("#modalYT4").on('show.bs.modal', function() {
    $("#yt4").attr('src', url4);
  });

  var url5 = $("#yt5").attr('src');
  $("#modalYT5").on('hide.bs.modal', function() {
    $("#yt5").attr('src', '');
  });
  $("#modalYT5").on('show.bs.modal', function() {
    $("#yt5").attr('src', url5);
  });

});
