const input = require('readline-sync');
// TODO 1.1a: Define candidateName
let candidateName = ""; 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2 and 3
let questions = [
    "Who was the first American woman in space? ", 
    "True or false: 5 kilometer == 5000 meters? ",
    "(5 + 3)/2 * 10 = ? ",
    "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
    "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [""];

  function askForName() { //function requesting user name
  let candidateName = input.question("What is your name? ");
}

   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  function askQuestion() {
    candidateAnswer = input.question(question);
    for (i = 0; i < questions.length; i++) {
      candidateAnswer[i] = input.question[i]
      candidateAnswers[i] = input.question[i]
      console.log(`Candidate answer: ${candidateAnswer[i]}`);
      console.log(`Correct Answer: ${candidateAnswers[i]}`);
    }
  }

  if (candidateAnswer == correctAnswer) {
    console.log("Answer is correct!");
  }else {
    console.log("Answer is incorrect!");
  }
  
 
  function askQuestions() {

   for (i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
        correctCount++;
        console.log(`Question ${i+1}: Correct!`);
    } else {
        console.log(`Question ${i+1}: Incorrect. Your answer: ${candidateAnswers[i]}, Correct answer: ${correctAnswers[i]}`);
    }
   }
  }


  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  function gradeQuiz(candidateAnswers) {
    let grade = '';
    let correctCount = '';

    for (i = 0; i < candidateAnswers.length; i++) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
        correctCount++
      }
    }


  //TODO 3.2 use this variable to calculate the candidates score.
  //let grade = '';
  
  
  grade = (correctCount / correctAnswers.length) * 100;  
 // calculate percentage of answers that are correct
 //console.log(`>>> Overall Grade: ${grade}% (${correctCount} out of ${questions.length} responses correct) <<< `);
  
//  if (grade >= 80) {
//  console.log('>>> Status: PASSED <<<');
// }else{
//  console.log('>>> Status: FAILED <<<');
//}
  
  return grade;


}

function runProgram() {
  askForName();
  console.log(askForName);
  askQuestion();
  console.log();
  askQuestions();
  // TODO 1.1c: Greet candidate using their name /
  gradeQuiz(this.candidateAnswers);
}

// Run the program before exporting
//runProgram();

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};