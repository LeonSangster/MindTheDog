const firebaseConfig = {
  apiKey: "AIzaSyBoflWgmbWjJ74SCgYzKZDTNQk8X8cu2Ak",
  authDomain: "dogapp-3507d.firebaseapp.com",
  databaseURL: "https://dogapp-3507d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dogapp-3507d",
  storageBucket: "dogapp-3507d.appspot.com",
  messagingSenderId: "122079409810",
  appId: "1:122079409810:web:baae383b8a288ed673984b"
};


// Starts Firebase
firebase.initializeApp(firebaseConfig);


// reference to my database

var ReportDormDB = firebase.database().ref('ReportForm');

document.getElementById('ReportForm').addEventListener('submit', submitForm)


 
function submitForm(e) {
    e.preventDefault();

    var Reporter_Name = getElementval("Reporter_Name")
    var Reporter_Email = getElementval("Reporter_Email")
    var Reporter_Username = getElementval("Reporter_Username")
    var Dispute = getElementval("Dispute")
    var User_Type = getElementval("User_Type")
    var A_Name = getElementval("A_Name")
    var A_Email = getElementval("A_Email")
    var User_File = getElementval("User_File")
    var User_Message =getElementval("User_Message") 
    SaveMessages(Reporter_Name,Reporter_Email,Username,Reporter_Username,Dispute,User_Type,A_Name,A_Email,User_File,User_Message);
}

const getElementval = (id) => {
  return document.getElementById(id).value;
}

const SaveMessages = (Reporter_Name,Reporter_Email
  ,Username,Reporter_Username,Dispute,User_Type,A_Name,A_Email,User_File,User_Message) => {
  var NewReportForm = ReportDormDB.push();

  NewReportForm.set({
    Reporter_Name: Reporter_Name,
    Reporter_Email: Reporter_Email,
    Reporter_Username: Reporter_Name,
    Dispute : Dispute,
    User_Type : User_Type,
    A_Name : A_Name,
    A_Email: A_Email,
    User_File: User_File,
    User_Message: User_Message,
  })
} 


/*
    /*
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


    function writeData() {
        firebase.database().ref("User").set({
            Reporter_Name: document.getElementById("Reporter_Name").value,
            Reporter_Email : document.getElementById("Reporter_Email").value,
            username: document.getElementById("Reporter_Username").value,
            Reporter_Username: document.getElementById("Reporter_Name").value,
            Dispute: document.getElementById("Dispute").value,
            User_Type: document.getElementById("User_Type").value,
            A_Name: document.getElementById("A_Name").value,
            A_Email: document.getElementById("A_Email").value,
            User_File: document.getElementById("User_File").value,
            User_Message: document.getElementById("User_Message").value, 
        }

        )
    }

    
    function getData() {
        firebase.database().ref('/').once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot)
            {
                var childkey = childSnapshot.key
                var childData = childSnapshot.val();
                document.getElementById("data").innerHTML = childData['ReporterName'] + "," + childData['Reporter_Email'];
            })
        })
    }
*/