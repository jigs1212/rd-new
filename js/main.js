$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready


  var selected = document.getElementById('head_tile');
  var activTitle = selected.dataset.title;
  $('.' + activTitle).addClass('current-menu-item');
  // $('#' + selected).addClass('current-menu-item');


  $("#contactForm").submit(function(e) {
    var url = "send_mail.php"; // the script where you handle the form input.
    console.log($("#contactForm").serialize());
    $.ajax({
      type: "POST",
      url: url,
      data: $("#contactForm").serialize(), // serializes the form's elements.
      success: function(data) {
        alert(data);
        console.log(data); // show response from the php script.
      },
      error: function(data) {
        alert(data);
        console.log(data);
      }
    });

    e.preventDefault(); // avoid to execute the actual submit of the form.
  });

});
