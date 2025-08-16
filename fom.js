// function for if , display family details 
function single_family() {
    if (document.querySelector('input[name="participation"]:checked').value == "family")
   {
  document.getElementById("family").style.display = "block";
  document.getElementById("amount-details-family").style.display = "block";
  document.getElementById("amount-details-single").style.display = "none";
  document.getElementById("familymember").value = "";
  document.getElementById("childnumber").value = "";
  document.getElementById("saji").style.display = "block";
  document.getElementById("tourqustion").style.display = "block";

  
 amountcalc();
}
else
{
  document.getElementById("family").style.display = "none";
  document.getElementById("amount-details-family").style.display = "none";
  document.getElementById("amount-details-single").style.display = "block";
  document.getElementById("familymember").value = "";
  document.getElementById("childnumber").value = "";
  document.getElementById("saji").style.display = "block";
  document.getElementById("tourqustion").style.display = "block";

  amountcalc();
}
}

// function testing, innerHtml value adding

function amountcalc() {
let familycount = Number(document.getElementById("familymember").value);
let touramount = 0;
let tourmember = 0;
let speedme = 1;

if (document.querySelector('input[name="tour1"]:checked').value == "yes")
{tourmember = speedme + familycount;
touramount = 1700 * tourmember;
document.getElementById("tourdisplay1").innerText = "TOUR AMOUNT = " + touramount;
document.getElementById("tourdisplay").innerText = "TOUR AMOUNT = " + touramount;
}
else{
document.getElementById("tourdisplay1").innerText = "";
document.getElementById("tourdisplay").innerText = "";
}
let Total_family = familycount * 500;
 document.getElementById("familyRS").innerText = "FAMILY MEMBER/HEAD 500 x " + familycount + "=Rs  " + Total_family;
 document.getElementById("speedmember").innerHTML = "SPEED MEMBER 1500"
 document.getElementById("speedmember1").innerHTML = "SPEED MEMBER 1500"
let Total = Total_family + 1500 + touramount;
document.getElementById("totalcharge").innerText = "TOTAL AMOUNT = " + Total;
document.getElementById("totalcharge1").innerText = "TOTAL AMOUNT = " + Total;

}



  function inputOKtest() {
  let nme = document.getElementById("nameinput").value;
  let desi = document.getElementById("designationinput").value;
  let phno = document.getElementById("phoneinput").value.trim(); // trim added
  let ofc = document.getElementById("officeinput").value;
  let rom = document.getElementById("roominput").value;
  let drist = document.getElementById("districtinput").value;
  let fmlyno = document.getElementById("familymember").value;
  let selectfmy = document.querySelector('input[name="participation"]:checked').value;
  let tourselect = document.querySelector('input[name="tour1"]:checked').value;
  if (nme == "") {
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter your name";
  }
  else if (desi == "") {
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter your designation";
  }
  else if (phno === "") {
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter your phone number";
  }
  else if (!/^\d{10}$/.test(phno)) {  // 10 digit validation
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter a valid 10-digit phone number";
  }
  else if (ofc == "") {
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter your office name";
  }
  else if (rom == 0) {
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Select room required or not";
  }
  else if (drist == 0) {
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Select your district";
  }
  else if (fmlyno == "" && selectfmy == "family") {
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Please enter family member details";
  }
  else {
    // Success case
    alertmenu.style.display = 'block';
    document.getElementById("saji").style.display = "none";
    document.getElementById("allelert").innerText = "Thankyou for register Speed Celebration 2026";

    // Submit to Apps Script, then open more.html
    const form = document.getElementById("myForm");
    const actionUrl = form.getAttribute("action");
    const params = new URLSearchParams(new FormData(form));

    fetch(actionUrl + "?" + params.toString(), {
      method: 'GET',
      mode: 'cors'
    })
    .then(() => {
      window.location.href = "more.html"; // same tab
    })
    .catch(err => {
      console.error(err);
      document.getElementById("allelert").innerText = "Submission failed. Please try again.";
      alertmenu.style.display = 'block';
      document.getElementById("saji").style.display = "block";
    });
  }
}


function okbutton(){
  alertmenu.style.display = 'none';
}

function tour(){
  if (document.querySelector('input[name="tour1"]:checked').value == "yes")

{
  amountcalc();
  document.getElementById("tourselection1").style.display = "block"; 

}
else
  {
    amountcalc();
    document.getElementById("tourselection1").style.display = "none"; 
 }
}




