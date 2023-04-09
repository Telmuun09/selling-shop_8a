const userData = [
    {
      firstname: "Bayalagmaa",
      lastname: "Bayarmaa",
      email: "bayalagmaa@nhs.edu.mn",
      pass: "Nest12345678",
      birth: "",
      secretQ: "Fav color",
      secretAns: "purple",
    },
  ];
  
  function Signup() {
    let passOne = document.getElementById("passOne").value;
    let passTwo = document.getElementById("passTwo").value;
  
    if (passOne === passTwo) {
      if (passOne.length >= 8) {
        if (passOne != passTwo.toLowerCase()) {
          if (passOne.match(/\d+/g).map(Number)) {
            console.log("pass success");
            SaveUser(passOne);
          } else {
            alert("must include digit");
          }
        } else {
          alert("must include atleast one uppercase");
        }
      } else {
        alert("too short");
      }
    } else {
      alert("pass doesnt match");
    }
  }
  
  function SaveUser(password) {
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let birth = document.getElementById("birth").value;
    let email = document.getElementById("email").value;
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    let newUser = {
      firstname: fname,
      lastname: lname,
      email: email,
      pass: password,
      birth: birth,
      secretQ: question,
      secretAns: answer,
    };
    userData.push(newUser);
    openTab(event, "login");
  }
  
  function Login() {
    let lemail = document.getElementById("lemail").value;
    let lpass = document.getElementById("lpass").value;
    for (let i = 0; i < userData.length; i++) {
      console.log("user", i, userData[i]);
      if (userData[i].email == lemail && userData[i].pass == lpass) {
        console.log("login success");
        window.location.replace("./Calculator.html");
      }
    }
  }
  
  function Forgot() {
    let femail = document.getElementById("femail").value;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].email == femail) {
        console.log("found user");
        document.getElementById("secretQuestion").innerHTML = userData[i].secretQ;
      } else {
        alert("user not found");
      }
    }
  }
  function Check() {
    let sanswer = document.getElementById("sAnswer").value;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].secretAns == sanswer) {
        console.log("answer match");
        document.getElementById("fpass").innerHTML = userData[i].pass;
      } else {
        alert("wrong answer");
      }
    }
  }
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }