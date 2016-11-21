# code_challenge

##### This is a simple **React + Redux** code challenge which consists in 5 simples steps:
  1. Two Checkboxes: To continue, at least one must be selected
  2. Two Buttons: To continue, a button must be selected. If a button is selected and you click on the other button, the previous is deselected. If you click on a selected button, you deselect it.
  3. An Input Field and a Submit Button: To continue, you must type something on the input, click the submit button and it should be successfull. It will simulate an API call which returns a promise. This promise returns success and the next button is enabled if the text of the input starts with '@' otherwise, the promise will fail and an error message will be show. If you try to modify the input field after receiving a successfull promise, the button will be disabled again, and you will need to create another submission.
  4. A Select Box: You have a Select Box with an empty (and disabled) value selected by default, to continue, you must select one of the three values. You can't select the empty value again since it is disabled.
  5. A submit button: This will send the payload of the steps above to a fake API. This fake API will randomly generate a promise, that can be successfull or not. After submiting the data to the API and receiving the response, the result of that response and the payload you sent will be show below the submit button.

  *Extra*: The requests to the fake API changes the Redux State of isFetching to true. Whenever isFecthing is true, a loading screen will be show. After receiving the response, isFetching is set to false again, and the loading ends.


## Instructions

* Pre Requisites  
 * ```git clone https://github.com/KadoBOT/code_challenge.git```
 * ```cd code_challenge```
 * ```npm install```
* Commands
 * To run the project: ```npm start```
    * Open browser on `http://localhost:3001`
 * To run tests:
   * Simple: ```npm run test```
    * Coverage: ```npm run test:coverage```
    * Verbose: ```npm run test:verbose```

## Folder Structure
```  
-src  
|-__tests__   // this is where our tests are  
|-actions      // redux actions Folder  
|-commons      // Reusable React Components  
|-components   // Our React Components  
|-data         // Redux Initial State  
|-helpers      // Functions that can be reused in the project  
|-reducers     // Redux reducers
  api.js       // Fake api
  index.jsx    // Our main React Component
  store.js     // Our Redux Store is created here
```

## TODO
  * Create tests for the React Components
  * Comment code
