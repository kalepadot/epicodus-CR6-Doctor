
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
    * Input: Therapy
    * Output: First name: Donna Last name: Neevel Accepting new patients: true Website: No results available Phone: 5038132000 Specialty Occupational Therapist Address 4855 SW Western Ave Beaverton 97005 OR
* User should be able to enter a name and recieve a list of Doctors fitting that input
    * Input: Smith  
    * Output: First name: Dennis Last name: Smith
* Each listed Doctor should include: first name, last name, phone number, website, address and whether or not the doctor is accepting new patients. 
    * Input: Donna 
    * Output: First name: Donna Last name: Neevel Accepting new patients: true Website: No results available Phone: 5038132000 Specialty Occupational Therapist Address 4855 SW Western Ave Beaverton 97005 OR 
* If the API call results in an error, the application should return a notification that states what the error is.
    * Input: hello
    * Output: No results are available given current input, try again 
    * Input : ' '
    * Output: No results are available, make a correct input.
* If the query response doesn't meet the search criteria, the application should return a notification that states that no doctors meet the criteria.
    * Input: Padot
    * Output: No results are available given current input, try again.
* If an area of the doctors profile is undefined, application will replace undefined with no results.
    * Input: Donna
    * Output: First name: Donna Last name: Neevel Accepting new patients: true Website: NO RESULTS AVALIABLE Phone: 5038132000 Specialty Occupational Therapist Address 4855 SW Western Ave Beaverton 97005 OR
* If API key error:
    * Input: Donna
    * Output: BetterDoctor API error, please try again or request a new key from your developer



## Setup/Installation Requirements

* You must first create your own uniqie API KEY.
* Visit BetterDoctor:( https://developer.betterdoctor.com/ ) and create an account.
* BetterDoctor will generate an API key for you, do not push this to github or share with anyone. 
* Relocate to terminal
* $ cd ~
* $ cd desktop
* Use this link to clone repo:( https://github.com/kalepadot/epicodus-CR6-Doctor.git )
* In terminal use command $ git clone (paste repo here)
* Navigate to directory: $ cd epicodus-CR6-Doctor
* Once in the root directory, $ touch .env  (this will create a file for your API key to live safely)
* Open directory in text editor VSCode recommended. If VSCode is default use command $ code .
* Add API key to the .env folder as follows: " API_KEY = "api key goes here".
* Get up to date with your webpack $ npm install
* Build the webpack with $ npm run build
* Now we can start the application, $ npm run start


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
* node/npm
* webpack/jest
* BetterDoctorAPI

### License

* A project by Jeremy Kale Padot/ Epicodus for educational purposes only. 

Copyright (c) 2020 **_Jeremy Kale Padot/Epicodus_**



