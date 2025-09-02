 <script>
document.getElementById("formsubmit").addEventListener("click", function(event) {
  
  var email = document.getElementById("emailAddress").value;
  var confirmEmail = document.getElementById("confirmEmail").value;

  
  if (email !== confirmEmail) {
    event.preventDefault();
    alert("Email addresses must match!");
  }
});
</script>
