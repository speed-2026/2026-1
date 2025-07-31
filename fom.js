


// function for if , display family details 
function single_family() {
    if (document.querySelector('input[name="participation"]:checked').value == "family")
   {
   document.getElementById("family").style.display = "block";
  document.getElementById("familyRS").style.display = "block";
  document.getElementById("familymember").value = "";
  document.getElementById("childnumber").value = "";
  
 amountcalc();
}
else
{
    document.getElementById("family").style.display = "none";
    document.getElementById("familyRS").style.display = "none";
    document.getElementById("familymember").value = "";
  document.getElementById("childnumber").value = "";

  amountcalc();
}
  
}
  
// function testing, innerHtml value adding

function amountcalc() {
 let familycount = document.getElementById("familymember").value;
let Total_family = familycount * 500;
 document.getElementById("familyRS").innerText = "FAMILY/HEAD 500 x " + familycount + "=Rs  " + Total_family;
 document.getElementById("speedmember").innerHTML = "SPEED Member Charge 1500"
let Total = Total_family + 1500
document.getElementById("totalcharge").innerText = "TOTAL AMOUNT = " + Total;
}

function submit() {

  let fmlyno = document.getElementById("familymember").value;
  let selectfmy = document.querySelector('input[name="participation"]:checked').value;
  if (fmlyno == "" && selectfmy == "family") {
    alert("Please enter family member details");
  }
  else
  { 
    alert("Thankyou for register Speed Celebration 2026");
  }
}
