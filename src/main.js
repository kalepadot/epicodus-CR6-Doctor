
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorWho } from './apicall-service';
$(document).ready(function() {
  $('#searchDoctor').submit(function(event) {
    event.preventDefault();
    $('#output').empty();
    const name = $('input[name="search"]').val();

    (async () => {
      
      const doctorWho = new DoctorWho();
      if (name === '') {
        $('#output').text("No results are available, make a correct input.");
      } 
      else {
        const response = await doctorWho.getDoctor(name);
        getElements(response);
      }
    })();
    function getElements(response) {
      if(response == false) {
        $('#output').text("BetterDoctor API error, please try again or request a new key from your developer");
      }
      else if(response.data && response.data.length > 0) {
        for(let i = 0; i < 10; i++) {
          const doctorFirstName = `${response.data[i].profile.first_name}`;
          const doctorLastName = `${response.data[i].profile.last_name}`;
          const doctorPatients = `${response.data[i].practices[0].accepts_new_patients}`;
          const doctorWebsite = `${response.data[i].practices[0].website}`;
          const doctorNumber = `${response.data[i].practices[0].phones[0].number}`;
          const doctorSpecialty = `${response.data[i].specialties[0].name}`;
          const doctorAddress = `${response.data[i].practices[0].visit_address.city}`;
          const doctorStreet = `${response.data[i].practices[0].visit_address.street}`;
          const doctorZip = `${response.data[i].practices[0].visit_address.zip}`;
          const doctorState = `${response.data[i].practices[0].visit_address.state}`;
          let doctorProfile = "<br>" + "First name: " + doctorFirstName + "<br>" + "Last name: " + doctorLastName + "<br>" + "Accepting new patients: " + doctorPatients + "<br>" + "Website: " + doctorWebsite + "<br>" + "Phone: " + doctorNumber + "<br>" + "Specialty " + doctorSpecialty + "<br>" + "Address" + "<br>" + doctorStreet + "<br>" + doctorAddress + "<br>" + doctorZip + "<br>" + doctorState + "<br>";
          if(doctorProfile.includes("undefined")){
            doctorProfile = doctorProfile.replace("undefined", "No results available");
          }
          $('#output').append(doctorProfile);
        }
      } else {
        $('#output').text("No results are available given current input, try again.");
      } 
    }
  });
});