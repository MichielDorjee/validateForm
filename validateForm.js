function validateForm() {
  // Validation v0.3 [14-09-2015] by Michiel Dorjee @ Exact

  // Validation markup design
  // ## remove on live -> move to classes ##
  var borderError = "1px solid red";
  var borderWarning = "1px solid orange";
  var borderReset = "1px solid gray";
  var borderGood = "1px solid green";

  // Validation rules
  var emailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var telefoonNR = /^0[0-9]{9}$/i;

  // Validation
  var form = document.getElementsByClassName("elq-form")[0]; // Get the first form on the page
  for (var i = 0; i < form.elements.length; i++) { // For each item, loop though the rules
    var e = form.elements[i];
    if (!emailAddress.test(e.value) && e.name == "EmailAddress") {
      event.preventDefault(); // Stop form from submitting for validation (will change in future)
      e.style.border = borderError;
    } else if (emailAddress.test(e.value) && e.name == "EmailAddress") {
      event.preventDefault();
      validateEmail(e);
    } else if (!telefoonNR.test(e.value) && e.name == "telefoonNR") {
      event.preventDefault(); // Stop form from submitting for validation (will change in future)
      e.style.border = borderError;
    } else {
      e.style.border = borderReset;
    }
  }
}

function validateEmail(e) {
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.responseText == "incorrect") {
      e.style.border = "1px solid orange";
    }else{
      e.style.border = "1px solid gray";
    }
  }.bind(e);
  xmlhttp.open("GET","http://play.exactonline.info/michiel/check.php?email="+e.value,true);
  xmlhttp.send();
}
