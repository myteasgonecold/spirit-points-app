//FIREBASE DATABASE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDw4yV21-ffCNPoGDtHL-cSs6Y4-8FVN2E",
  authDomain: "pinewoodspiritpointswebs-3b49d.firebaseapp.com",
  databaseURL: "https://pinewoodspiritpointswebs-3b49d.firebaseio.com",
  projectId: "pinewoodspiritpointswebs-3b49d",
  storageBucket: "pinewoodspiritpointswebs-3b49d.appspot.com",
  messagingSenderId: "604971263604",
  appId: "1:604971263604:web:e502093a66094f19495321",
  measurementId: "G-LZEV31GP0X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
db = firebase.firestore();

var username = "something";
var pw = "bla";


// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     console.log("USER IS LOGGED IN");
//     localStorage.setItem("adminModeTrueOrFalse", "true");
//   } else {
//     // No user is signed in.
//     console.log("USER IS LOGGED OUT");
//     localStorage.setItem("adminModeTrueOrFalse", "false");
//   }
// });

// var user = firebase.auth().currentUser;
// if (user) {
//   //User is signed in
//   console.log("logged in");
//   localStorage.setItem("adminModeTrueOrFalse", "true");
// }
// else {
//   console.log("not logged in");
//   localStorage.setItem("adminModeTrueOrFalse", "false");
// }



if (localStorage.getItem("adminModeTrueOrFalse") === null) {
  notAdminMode();
}
else {
  var trueOrFalse = localStorage.getItem('adminModeTrueOrFalse');
  if (trueOrFalse == "true") {
    adminMode();
  }
  else if (trueOrFalse == "false") {
    notAdminMode();
  }

}


function notAdminMode() {
  localStorage.setItem("adminModeTrueOrFalse", "false");
  var element = document.getElementsByClassName("admin-mode-table");
  var i;
  for (i = 0; i < element.length; i++) {
    element[i].classList.add("admin-mode-table-hidden");
  }

  document.getElementById("grades").disabled = false;
  document.getElementById("points").disabled = false;

  var adminButton = document.getElementById("admin-button");
  adminButton.style.display = "block";

  var inAdminButton = document.getElementById("in-admin-button");
  inAdminButton.style.display = "none";

  var historyButton = document.getElementById("history-button");
  historyButton.style.display = "none";

  var manageUsersButton = document.getElementById("manageUsers-button");
  manageUsersButton.style.display = "none";

  var upcomingEventHeader = document.getElementById("upcomingEventHeader");
  upcomingEventHeader.style.display = "none";

  var eventsTable = document.getElementById("eventsTable");
  eventsTable.style.display = "none";
}

function adminMode() {
  var element = document.getElementsByClassName("admin-mode-table-hidden");
  var i;
  for (i = 0; i < element.length; i++) {
    element[i].classList.remove("admin-mode-table-hidden");
  }

  document.getElementById("grades").disabled = false;
  document.getElementById("points").disabled = true;

  var adminButton = document.getElementById("admin-button");
  adminButton.style.display = "none";

  var inAdminButton = document.getElementById("in-admin-button");
  inAdminButton.style.display = "block";

  var historyButton = document.getElementById("history-button");
  historyButton.style.display = "block";

  var manageUsersButton = document.getElementById("manageUsers-button");
  manageUsersButton.style.display = "block";

  var upcomingEventHeader = document.getElementById("upcomingEventHeader");
  upcomingEventHeader.style.display = "block";

  var eventsTable = document.getElementById("eventsTable");
  eventsTable.style.display = "block";
}

function setUpFirebaseDatabase(){
  // Add collection for Freshman
  db.collection("points").doc("Freshman").set({
      points: 200
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for Sophomores
  db.collection("points").doc("Sophomores").set({
      points: 20
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for Juniors
  db.collection("points").doc("Juniors").set({
      points: 30
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for Seniors
  db.collection("points").doc("Seniors").set({
      points: 15
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for 8th grade
  db.collection("points").doc("8th Grade").set({
      points: 15
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  //Add collection for 7th grade
  db.collection("points").doc("7th Grade").set({
      points: 15
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}

//ONLY HAD TO BE USED ONCE, DO NOT UNCOMMENT BECAUSE IT WILL RESET THE POINTS
//setUpFirebaseDatabase(); //DO NOT UNCOMMENT PLEASE

function createChart(seventhGradePoints, eightGradePoints, freshmanPoints, sophomorePoints, juniorPoints, seniorPoints) {
    var graph = document.getElementById("chartContainer");
    graph.style.height = "370px";
    graph.style.width = "100%";

    var chart = new CanvasJS.Chart("chartContainer", {
    	animationEnabled: true,

    	title:{

    	},
    	axisX:{
    		interval: 1
    	},
    	axisY2:{
    		interlacedColor: "rgba(1,77,101,.2)",
    		gridColor: "rgba(1,77,101,.1)"

    	},
    	data: [{
    		type: "bar",
    		name: "companies",
    		axisYType: "secondary",
    		color: "#014D65",
    		dataPoints: [
    			{ y: seventhGradePoints, label: "7th Grade" },
    			{ y: eightGradePoints, label: "8th Grade" },
    			{ y: freshmanPoints, label: "9th Grade" },
    			{ y: sophomorePoints, label: "10th Grade" },
    			{ y: juniorPoints, label: "11th Grade" },
    			{ y: seniorPoints, label: "12th Grade" },
    		]
    	}]
    });
    chart.render();

}

function getData(){
  var docRef = db.collection("points").doc("Freshman");
  var freshmanPoints = 0;
  var sophomorePoints = 0;
  var juniorPoints = 0;
  var seniorPoints = 0;
  docRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          freshmanPoints = doc.data().points;
          console.log("freshmanPoints", freshmanPoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef2 = db.collection("points").doc("Sophomores");

  docRef2.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          sophomorePoints = doc.data().points;
          console.log("SophomorePoints", sophomorePoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef3 = db.collection("points").doc("Juniors");

  docRef3.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          juniorPoints = doc.data().points;
          console.log("JuniorPoints", juniorPoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef4 = db.collection("points").doc("Seniors");

  docRef4.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          seniorPoints = doc.data().points;
          console.log("SeniorPoints", seniorPoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef5 = db.collection("points").doc("8th Grade");

  docRef5.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          eightGradePoints = doc.data().points;
          console.log("8thGradePoints", eightGradePoints);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  var docRef6 = db.collection("points").doc("7th Grade");

  docRef6.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          seventhGradePoints = doc.data().points;
          console.log("7thGradePoints", seventhGradePoints);
          gotScore([seventhGradePoints, eightGradePoints, freshmanPoints, sophomorePoints, juniorPoints, seniorPoints]);

      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}


function gotScore(points) {
  //Variables to store the points in for all the grades
  console.log(points);
  var freshman_SP = [points[2], "Freshman"];
  var sophomore_SP = [points[3], "Sophomore"];
  var junior_SP = [points[4], "Junior"];
  var senior_SP  = [points[5], "Senior"];
  var m_8_SP  = [points[1], "8th Grade"];
  var m_7_SP = [points[0], "7th Grade"];

  console.log(points[0], points[1], points[2], points[3]);

  var greatest = Math.max(freshman_SP[0], sophomore_SP[0], junior_SP[0], senior_SP[0]);
  var all_grades = [freshman_SP, sophomore_SP, junior_SP, senior_SP];
  console.log("all grades", all_grades);
  crowning(all_grades, greatest);

  elementtext(all_grades);

  var greatest_middle = Math.max(m_8_SP[0], m_7_SP[0]);
  var all_grades_middle = [m_7_SP, m_8_SP];
  console.log("all grades", all_grades_middle);
  crowning_middle(all_grades_middle, greatest_middle);

  elementtext_middle(all_grades_middle);

  document.getElementById("grades").onclick = function() {
    // sort("grades", all_grades, m_8_SP, m_7_SP, greatest, freshman_SP, sophomore_SP, junior_SP, senior_SP);
    sort("grades", all_grades, greatest, freshman_SP, sophomore_SP, junior_SP, senior_SP, all_grades_middle, greatest_middle, m_8_SP, m_7_SP);
  };
  document.getElementById("points").onclick = function() {
    sort("points", all_grades, greatest, freshman_SP, sophomore_SP, junior_SP, senior_SP, all_grades_middle, greatest_middle, m_8_SP, m_7_SP);
  };
  document.getElementById("graph").onclick = function() {
    sort("graph", all_grades, greatest, freshman_SP, sophomore_SP, junior_SP, senior_SP, all_grades_middle, greatest_middle, m_8_SP, m_7_SP);
  };
}


async function signInWithFirebase(x,y){
   await firebase.auth().signInWithEmailAndPassword(x, y).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
    alert(errorMessage);
    // ...
  });
  checkIfSignedIn();
}

async function checkIfSignedIn(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("USER IS LOGGED IN");
      localStorage.setItem("adminModeTrueOrFalse", "true");
      var modal = document.getElementById('login');
      modal.style.display = "none";

    } else {
      // No user is signed in.
      console.log("USER IS LOGGED OUT");
      localStorage.setItem("adminModeTrueOrFalse", "false");
      var modal = document.getElementById('login');
      modal.style.display = "none";

    }
  });
}

//Admin Alert
var modal = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

//NO FIREBASE
async function validateForm(){
  console.log("inside validate Form");
  //var x = document.forms["myForm"]["uname"].value;
  var x = document.forms.myForm.uname.value;
  //var y = document.forms["myForm"]["password"].value;
  var y = document.forms.myForm.password.value;

  await signInWithFirebase(x,y);

  localStorage.setItem("name", x);
  getData();
  location.reload();
}

//Sets the text content of the labels to the variable
function elementtext(all_grades){
  document.getElementById("first-points").textContent = all_grades[0][0];
  document.getElementById("second-points").textContent = all_grades[1][0];
  document.getElementById("third-points").textContent = all_grades[2][0];
  document.getElementById("fourth-points").textContent = all_grades[3][0];

  document.getElementById("first").textContent = all_grades[0][1];
  document.getElementById("second").textContent = all_grades[1][1];
  document.getElementById("third").textContent = all_grades[2][1];
  document.getElementById("fourth").textContent = all_grades[3][1];
}

function elementtext_middle(all_grades_middle){
  // document.getElementById("m_1-points").textContent = all_grades_middle[0][0];
  $("#m_1-points").text(all_grades_middle[0][0]);
  document.getElementById("m_2-points").textContent = all_grades_middle[1][0];

  document.getElementById("m_1").textContent = all_grades_middle[0][1];
  document.getElementById("m_2").textContent = all_grades_middle[1][1];
}
//gives crown
function crowning(all_grades, greatest){
  $("#fi-crown").removeClass("fas fa-crown");
  $("#se-crown").removeClass("fas fa-crown");
  $("#th-crown").removeClass("fas fa-crown");
  $("#fo-crown").removeClass("fas fa-crown");
  if(all_grades[0][0]==greatest){
    $("#fi-crown").addClass("fas fa-crown");
  }
  if (all_grades[1][0]==greatest) {
    $("#se-crown").addClass("fas fa-crown");
  }
  if (all_grades[2][0]==greatest) {
    $("#th-crown").addClass("fas fa-crown");
  }
  if (all_grades[3][0]==greatest){
    $("#fo-crown").addClass("fas fa-crown");
  }
}

function crowning_middle(all_grades_middle, greatest_middle){
  $("#first-crown").removeClass("fas fa-crown");
  $("#second-crown").removeClass("fas fa-crown");

  if(all_grades_middle[0][0]==greatest_middle){
    $("#first-crown").addClass("fas fa-crown");
  }
  if (all_grades_middle[1][0]==greatest_middle) {
    $("#second-crown").addClass("fas fa-crown");
  }
}

function sortFunction(a, b){
  if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

//toggle button
function sort(toggle, all_grades, greatest, freshman_SP, sophomore_SP, junior_SP, senior_SP, all_grades_middle, greatest_middle, m_8_SP, m_7_SP, ){
  if (toggle=="points"){

    var graph = document.getElementById("chartContainer");
    graph.style.display = "none";

    var highSchoolData = document.getElementById("high-school");
    highSchoolData.style.display = "flex";

    var highSchoolTitle = document.getElementById("high-school-text");
    highSchoolTitle.style.display = "flex";

    var middleSchoolData = document.getElementById("middle-school");
    middleSchoolData.style.display = "flex";

    var middleSchoolText = document.getElementById("middle-school-text");
    middleSchoolText.style.display = "flex";

    all_grades.sort(sortFunction);

    all_grades_middle.sort(sortFunction);

    //if (m_8_SP[0]>=m_7_SP[0]){
    //  document.getElementById("m_1-points").textContent = m_8_SP[0];
    //  document.getElementById("m_2-points").textContent = m_7_SP[0];
    //  document.getElementById("m1").textContent = m_8_SP[1];
    //  document.getElementById("m2").textContent = m_7_SP[1];
    // }
  }
  else if (toggle=="grades"){

    var graph = document.getElementById("chartContainer");
    graph.style.display = "none";

    var highSchoolData = document.getElementById("high-school");
    highSchoolData.style.display = "flex";

    var highSchoolTitle = document.getElementById("high-school-text");
    highSchoolTitle.style.display = "flex";

    var middleSchoolData = document.getElementById("middle-school");
    middleSchoolData.style.display = "flex";

    var middleSchoolText = document.getElementById("middle-school-text");
    middleSchoolText.style.display = "flex";

    all_grades = [freshman_SP, sophomore_SP, junior_SP, senior_SP];

    all_grades_middle = [m_7_SP, m_8_SP];
    //document.getElementById("m_1-points").textContent = m_7_SP[0];
    //document.getElementById("m_2-points").textContent = m_8_SP[0];
    //document.getElementById("m1").textContent = m_7_SP[1];
    //document.getElementById("m2").textContent = m_8_SP[1];
  }
  else if (toggle=="graph"){
    createChart(m_7_SP[0], m_8_SP[0], freshman_SP[0], sophomore_SP[0], junior_SP[0], senior_SP[0]);
    var graph = document.getElementById("chartContainer");
    graph.style.display = "block";
    graph.style.height = "370px";

    var highSchoolData = document.getElementById("high-school");
    highSchoolData.style.display = "none";

    var highSchoolTitle = document.getElementById("high-school-text");
    highSchoolTitle.style.display = "none";

    var middleSchoolData = document.getElementById("middle-school");
    middleSchoolData.style.display = "none";

    var middleSchoolText = document.getElementById("middle-school-text");
    middleSchoolText.style.display = "none";
  }

  elementtext(all_grades);
  crowning(all_grades, greatest);

  elementtext_middle(all_grades_middle);
  crowning_middle(all_grades_middle, greatest_middle);

  return;
}

function getUpcomingEvents() {
  var documentNumber = 0;
  db.collection("upcoming events").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        var ul = document.getElementById("upcomingEventsList");
        var li = document.createElement("li");
        var span = document.createElement("span");
        var documentString = "upcomingEvent" + String(documentNumber);
        var documentStringPoints = documentString + "Points";
        console.log(documentStringPoints);
        var documentData = doc.data();
        li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        span.setAttribute("class", "badge badge-primary badge-pill");
        li.innerHTML = documentData.NameAndDate;
        span.innerHTML = documentData.PointsPossible;
        li.appendChild(span);
        ul.appendChild(li);
        documentNumber += 1;
    });
});
}

//RUNNING CODE
getData();

function addUpcomingEvent() {
  console.log("adding event");
  name = document.getElementById("upcomingEventToAddOrDelete").value;
  points = document.getElementById("upcomingEventPointsToAddOrDelete").value;

  db.collection("upcoming events").doc(name).set({
    NameAndDate: name,
    PointsPossible: points,
  })
  .then(function() {
      console.log("Document successfully written!");
      location.reload();
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}

function removeUpcomingEvent() {
  name = document.getElementById("upcomingEventToAddOrDelete").value;
  db.collection("upcoming events").doc(name).delete().then(function() {
    console.log("Document successfully deleted!");
    location.reload();
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

function changePoints(gradeToAdd, operation) {
  var reason=prompt("Please add a reason","");
  var pointsToAdd = 0;

  //Get points to add
  if (gradeToAdd == 9){
    pointsToAdd = document.getElementById("freshmanPointsToAdd").value;
    var docRef = db.collection("points").doc("Freshman");
  }
  else if (gradeToAdd==10) {
    pointsToAdd = document.getElementById("sophomorePointsToAdd").value;
    var docRef = db.collection("points").doc("Sophomores");
  }
  else if (gradeToAdd==11){
    pointsToAdd = document.getElementById("juniorPointsToAdd").value;
    var docRef = db.collection("points").doc("Juniors");
  }
  else if (gradeToAdd==12){
    pointsToAdd = document.getElementById("seniorPointsToAdd").value;
    var docRef = db.collection("points").doc("Seniors");
  }
  else if (gradeToAdd==7){
    pointsToAdd = document.getElementById("m7PointsToAdd").value;
    var docRef = db.collection("points").doc("7th Grade");
  }
  else if (gradeToAdd==8){
    pointsToAdd = document.getElementById("m8PointsToAdd").value;
    var docRef = db.collection("points").doc("8th Grade");
  }

  console.log(pointsToAdd);

  //Get current points
  var points = 0;
  docRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          points = doc.data().points;
          console.log("points", points);
          console.log("pointsToAdd", pointsToAdd)
          var totalPoints = 0;
          if (operation == 1) {
            totalPoints = parseInt(points) + Math.abs(parseInt(pointsToAdd));
          }
          if (operation == 2) {
            totalPoints = parseInt(points) - Math.abs(parseInt(pointsToAdd));
          }
          console.log("totalpoints", totalPoints);
          var currentDate = new Date();
          console.log("date", currentDate);
          // Update points in database
          docRef.set({
              points: totalPoints
          })
          .then(function() {
              console.log("Document successfully written!");
              var currentUser = localStorage.getItem("name");
              if (operation == 2) {
                pointsToAdd = pointsToAdd - (pointsToAdd*2);
              }
              db.collection("history").doc(String(currentDate)).set({
                  user: currentUser,
                  points: parseInt(pointsToAdd),
                  grade: parseInt(gradeToAdd),
                  date: currentDate,
                  stringDate: String(currentDate),
                  reason: String(reason)
              })
              .then(function() {
                  console.log("Document successfully written!");
                  getData();
              })
              .catch(function(error) {
                  console.error("Error writing document: ", error);
              });
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

}

window.onload = function what(){
  getUpcomingEvents();
};

function exitAdminModeClicked() {
  notAdminMode();
}

function historyButtonClicked() {
  window.location.href = "history.html";
}

function manageUsersClicked() {
  window.location.href = "manageUsers.html";
}
