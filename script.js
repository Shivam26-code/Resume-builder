// alert("loading");
function addNewWEField() {
  // console.log("Adding new field");

  let newNode = document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('wefield');
  newNode.classList.add('mt-3');
  newNode.setAttribute('rows', 3);
  newNode.setAttribute("palceholder", "Enter here");

  let weOb = document.getElementById("WE");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

// function addNewAQField() 
{


    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfiel');
    newNode.classList.add('mt-3');
     newNode.setAttribute('rows' ,3);
    newNode.setAttribute('placeholder', "Enter here");

      let aqOb = document.getElementById("aq");
     let aqAddButtonOb = document.getElementById("aqAddButton");

     aqOb.insertBefore(newNode,aqAddButtonOb)
} 

//  genrating resume 

function generateResume() {
  let namefield = document.getElementById("namefield").value;
  let nameT1 = document.getElementById('nameT1')
  nameT1.innerHTML = namefield;

  //  direct
  document.getElementById('nameT2').innerHTML = namefield;

  //contact
  document.getElementById('contactT').innerHTML = document.getElementById(
    "contactfield"
  ).value;

  //  address 
  document.getElementById('addressT').innerHTML = document.getElementById(
    "Addressfield"
  ).value;
  document.getElementById('fbT').innerHTML = document.getElementById(
    "fbfield"
  ).value;
  document.getElementById('instaT').innerHTML = document.getElementById(
    "Instafield"
  ).value;
  document.getElementById('LinkedT').innerHTML = document.getElementById(
    "linkedfield"
  ).value;

  //  objective

  document.getElementById("objectiveT").innerHTML = document.getElementById(
    "objectivefield"
  ).value;

  // document.getElementById("AcademicT").innerHTML = document.getElementById(
  //   "Academicfeild"
  // ).value;

  //we

  let wes = document.getElementsByClassName('wefield')

  let str = '';

  for (let e of wes) {
    str = str + '<li> ${e.value} </li>';
  }

  document.getElementById("weT").innerHTML = str;

  // aq

  let aqs = document.getElementsByClassName("eqfield");

  let str1 = "";

  for (let e of aqs) {

    str1 += '<li> ${e.value} </li>';

  }



  document.getElementById('aqT').innerHTML = str1;

  // code for setting image

  let file = document.getElementById("imgField").files[0];

  console.log(file);

  let reader = new FileReader()

  reader.readAsDataURL(file);

  console.log(reader.result);

  // set image to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById('cv-form').style.display = 'none';
  document.getElementById('cv-template').style.display = 'block';

}

//  print-resume

function printResueme() {
  window.print();
}