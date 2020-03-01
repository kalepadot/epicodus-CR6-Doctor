// User Interface Logic
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { DoctorWho } from '../apicall-service.js';
import { DoctorWho } from './../apicall-service.js';


$(document).ready(function() {
  $('#searchDoctor').submit(function(event) {
    event.preventDefault();
    // $('input[name="search"]').val()
    $('#output').empty();
    const name = $('input[name="search"]').val();
  
      (async () => {
        let doctorWho = new DoctorWho();
        console.log(name);
        const response = await doctorWho.getDoctor(name);
        getElements(response);
      })();

    function getElements(response) {
      console.log(response);
      if(response == false){
        $('#output').text("BetterDoctor API error, please try again or request a new key from your developer");
      }
      if(response.data && response.data.length > 0) {
        for(let i = 0; i < 10; i++) {
          let doctorFirstName = `${response.data[i].profile.first_name}`;
          let doctorLastName = `${response.data[i].profile.last_name}`;
          let doctorPatients = `${response.data[i].practices[0].accepts_new_patients}`;
          let doctorWebsite = `${response.data[i].practices[0].website}`;
          let doctorNumber = `${response.data[i].practices[0].phones[0].number}`;
          let doctorSpecialty = `${response.data[i].specialties[0].name}`;
          let doctorProfile = "<br>" + "First name: " + doctorFirstName + "<br>" + "Last name: " + doctorLastName + "<br>" + "Accepting new patients: " + doctorPatients + "<br>" + "Website: " + doctorWebsite + "<br>" + "Phone: " + doctorNumber + "<br>" + "Specialty " + doctorSpecialty + "<br>";
         
          
          $('#output').append(doctorProfile);
        } 
      } else {
         $('#output').text("No results are available, make a correct input.");
        }
    }
  });
});
  //     function getElements(response) {
  //         console.log(response)
  //     }
  //       // if (response) {
  //         // $('#output').text(`${response.text}%`);
  //         if(response.data.length > 0) {
  //         for(let i = 0; i < 10; i++) {
  //         let doctorFirstName = `${response.data[i].profile.first_name}`;
  //         let doctorLastName = `${response.data[i].profile.last_name}`;
  //         let Patients = `${response.data[i].practices[0].accepts_new_patients}`;
  //         let doctorWebsite = `${response.data[i].practices[0].website}`;
  //         let doctorNumber = `${response.data[i].practices[0].phones[0].number}`;
  //         let doctorProfile ="<br>" + "First name: " + doctorFirstName + "<br>" + "Last name: " + doctorLastName + "<br>" + "Currently accepting new patients?: " + doctorPatients + "<br>" + "More information on Doctors Website: " + doctorWebsite + "<br>" +"Contact Number for apointments and questions: " + doctorNumber + "<br>";
          
  //       } else {
  //         $('#output').text(`Sorry, that was not a valid input.`);
  //       }
      
  //   }); 
  // });
  // });