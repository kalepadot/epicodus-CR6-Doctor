// User Interface Logic
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { DoctorWho } from '../apicall-service.js';
import { DoctorWho } from './../apicall-service.js';


$(document).ready(function() {
  $('#searchDoctor').submit(function() {
    event.preventDefault();

      const name = $('input#search').val();
      (async () => {
        let doctorWho = new DoctorWho();
        console.log(name);
        const response = await doctorWho.getDoctor(name);
        getElements(response);
      })();

      function getElements(response) {
          console.log(response)
        if (response) {
          $('#output').text(`${response.text}%`);
          
        } else {
          $('#output').text(`Sorry, that was not a valid input.`);
        }
      }
    }); 
  });