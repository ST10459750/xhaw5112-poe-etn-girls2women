// Adding Toast javascript
$(document).ready(function() {
  $("#toastbtn").click(function() {
    $('.toast').each(function() {
      var toast = new bootstrap.Toast(this);
      toast.show();
    });
  });
});
