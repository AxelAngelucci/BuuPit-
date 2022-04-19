var Form1 = document.getElementById("Form1");
        var nameInput = document.getElementById("firstname-input");
        var lastNameInput = document.getElementById("lastname-input");
        var emailInput = document.getElementById("email-input");
        var countryInput = document.getElementById("country-input");
        var phoneInput = document.getElementById("phone-input");
        var form1Alert = document.getElementById("Form1Alert");

        var Form2 = document.getElementById("Form2");
        var englishInput = document.getElementById("how_s_your_english_-input");
        var linkedinInput = document.getElementById("linkedin-input");
        var cvInput = document.getElementById("cv-input");
        var form2Alert = document.getElementById("Form2Alert");

        var Form3 = document.getElementById("Form3");
        var roleInput = document.getElementById("what_role_are_you_most_experienced_in_-input");
        var form3Alert = document.getElementById("Form3Alert");
    
        var Next2 = document.getElementById("Next2");
        var Next3 = document.getElementById("Next3");
        var Next4 = document.getElementById("Next4");

        
        Next2.onclick = function(){
          if(nameInput.value === "" || lastNameInput.value === "" || emailInput === "" || countryInput === "" || phoneInput === ""){
          form1Alert.style.display = "block";
        }else{
          Form1.style.display = "none";
          Form2.style.display = "block";
          console.log(nameInput);
        }
          
        }
        
        
        Next3.onclick = function(){
          
          if(englishInput.value === "" || linkedinInput.value === "" || cvInput.value === ""){
            form2Alert.style.display = "block";
          }else{
            Form2.style.display = "none";
            Form3.style.display = "block";
          }
          
        }

        Next4.onclick = function(){
          if(roleInput === ""){
            form3Alert.style.display = "block"
          }else{
            Form3.style.display = "none";
            Form4.style.display = "block";
          }
          
        }