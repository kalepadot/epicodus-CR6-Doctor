
```                                       
   _   
  |_  |                               | | / /     | |      | ___ \       | |     | |  
    | | ___ _ __ ___ _ __ ___  _   _  | |/ /  __ _| | ___  | |_/ __ _  __| | ___ | |_ 
    | |/ _ | '__/ _ | '_ ` _ \| | | | |    \ / _` | |/ _ \ |  __/ _` |/ _` |/ _ \| __|
/\__/ |  __| | |  __| | | | | | |_| | | |\  | (_| | |  __/ | | | (_| | (_| | (_) | |_ 
\____/ \___|_|  \___|_| |_| |_|\__, | \_| \_/\__,_|_|\___| \_|  \__,_|\__,_|\___/ \__|
                                __/ |                                                 
                               |___/    
```
# _Doctor Who?_

#### _Epicodus Code Review 6 API's 'Doctor Who?' / Feb 14, 2020 Happy Valentines Day ❤️_

#### By _**Jeremy Kale Padot**_

## Description

_A Doctor searching application that outputs a list of doctors in the Portland area and information about the Doctor and practice. Information includes: Name, Website, Phone, Accepting new patients, and Doctor Specialty. User will recieve error messages if input is not correct. Application will display the top ten matching results based on user input._

## Specs
* User should be able to search a medical issue and recieve a list of doctors in the Portland area
    * Input: sore throat
    * Output: Here is a doctor that specializes in sore throats in your area: (lists doctor)
* User should be able to enter a name and recieve a list of Doctors fitting that input
    * Input: Smith  
    * Output: We've found your Doctor
* Each listed Doctor should include: first name, last name, phone number, website and whether or not the doctor is accepting new patients. 
    * Input: Smith 
    * Output: Dr. John Smith, 555-5555, drsmith.com, Dr. Smith is currently accepting patients, Specialty: Physical-Therapy. 
* If the API call results in an error, the application should return a notification that states what the error is.
    * Input: hello or ''  '' :
    * Output: No results avaliable, please make a correct input. 
* If the query response doesn't meet the search criteria, the application should return a notification that states that no doctors meet the criteria.
    * Input: Padot
    * Output: No results avaliable given current input, please try again.
* If an area of the doctors profile is undefined, application will replace undefined with no results.
    * Input: Dr.Smith
    * Output: Dr. Smith, 555-5555, website: NO RESULTS, accepting new patients: true, Specialty: NO RESULTS.



## Setup/Installation Requirements

<!-- * _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_ -->



## Known Bugs

_There are currently no known bugs at this time._

## Support and contact details

_For support/ questions/ bugs contact Jeremy Kale Padot at: jeremy@padot.us_

## Technologies Used

* Macbook Pro
* VSCode
* Bootstrap ver 3.7
* jQuery 3.4.1
* html
* CSS
* JavaScript
* Terminal
<!-- * API -->
<!-- * webpack/jest -->

### License

* A project by Jeremy Kale Padot/ Epicodus for educational purposes only. 

Copyright (c) 2020 **_Jeremy Kale Padot/Epicodus_**



