

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
 document.getElementById("familyRS").innerText = "FAMILY MEMBER/HEAD 500 x " + familycount + "=Rs  " + Total_family;
 document.getElementById("speedmember").innerHTML = "SPEED MEMBER 1500"
let Total = Total_family + 1500
document.getElementById("totalcharge").innerText = "TOTAL AMOUNT = " + Total;
}


function submitForm() {
      let name = document.getElementById("nameinput").value;
      let designation = document.getElementById("designationinput").value;
      let phone = document.getElementById("phoneinput").value;
      let office = document.getElementById("officeinput").value;
      let district = document.getElementById("districtinput").value;
      let participation = document.querySelector('input[name="participation"]:checked')?.value || '';
      let familyCount = document.getElementById("familymember").value || '0';
      let childrenCount = document.getElementById("childnumber").value || '0';

      // Optional: Validate required fields
      if (!name || !designation || !phone || !office || district == "0") {
        inputOKtest();
        return;
      }
	document.getElementById("myForm").submit();
      // Prepare data
    
    }


function inputOKtest() {
  let nme = document.getElementById("nameinput").value;
  let desi = document.getElementById("designationinput").value;
  let phno = document.getElementById("phoneinput").value;
  let ofc = document.getElementById("officeinput").value;
  let drist = document.getElementById("districtinput").value;
  let fmlyno = document.getElementById("familymember").value;
  let selectfmy = document.querySelector('input[name="participation"]:checked').value;

  if (nme == "") {

    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter your name";

  }
  else if
    (desi == ""){
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter your designation";
  }
  else if
    (phno === ""){

    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter your phone number";
  }
  else if
    (ofc == ""){
  alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Enter your office name";
  }

  else if
    (drist == 0){
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Select your district";
  }

else if (fmlyno == "" && selectfmy == "family") {
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Please enter family member details";
  }

else if (document.querySelector('input[name="participation"]:checked').value == "single") {
    alertmenu.style.display = 'block';
    document.getElementById("familymember").value = 1;
  }

    
  else
  { 
    
    alertmenu.style.display = 'block';
    document.getElementById("allelert").innerText = "Thankyou for register Speed Celebration 2026";
   submitForm()
  }
}


function okbutton(){
  alertmenu.style.display = 'none';
}

