//Sorry tried my best but Just didn't have enough time 
//to better understand how to make JS work for this quiz
// =( will try my best to fix this in the future)


//set up questions
 Questions
 //what is the capital of USA ?
 //options New york city, Los angeles, Washington DC, Dtroit.
 //answer: washington DC

 //what is the state bird of Louisiana?
 //Pelican
 //Seagull
 //Seahawk
 //Dove
 //answer: Pelican

//What is the famous seasoning that comes from Maryland?
//Worcestershire sauce
//Zatarains
//Old Bay
//Cajun chilli powder
//answer: Old bay

//what is Shakespeare's first name?
//Bob
//Michael
//William
//Jack
//answer: William
var questions = [
    {
      question: 'What is the capital of USA:',
      choices: ['NYC', 'LA', 'Washington DC', 'Detroit'],
      answer: 'Washington DC',
    },
    {
      question: 'What is the famous seasoning that comes from Maryland?',
      choices: ['Worcestershire sauce', 'Zatarains', 'Old Bay', 'Cajun spice'],
      answer: 'Old Bay',
    }]

    
//call function
function startQuiz()
function getQuestion()
//set up event listener

//set up timer

//tally score and use local storage to keep it
function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();
  
    // make sure value wasn't empty
    if (initials !== '') {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem('highscores')) || [];
  
      // format new score object for current user
      var newScore = {
        score: time,
        initials: initials,
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = 'highscores.html';
    }
  }