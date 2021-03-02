 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////



     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. Different conformations of the protein differ only in:", ///// Write the question inside double quotes
            answers: {
                a: "distance between the bonds of backbone and amino acid side chains", ///// Write the option 1 inside double quotes
                b: "number of amino acid side-chains", ///// Write the option 2 inside double quotes
		c: "angle of rotation about the bonds of backbone and amino acid side-chains", ///// Write the option 1 inside double quotes
                d: "measure of dihedral angle at the peptide", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Chemical denaturation denotes marked change in protein structure of the native protein in response to: ",  ///// Write the question inside double quotes
      answers: {
        a: "change in temperature",                  ///// Write the option 1 inside double quotes
        b: "acid or alkali",                  ///// Write the option 2 inside double quotes
        c: "Disruption of weak interactions by boiling",
	d: "Exposure to detergents", 
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


      {
      question: "3.  Which of the following chemical denaturant is not an inorganic salt? ",  ///// Write the question inside double quotes
      answers: {
        a: "Lithium bromide",                  ///// Write the option 1 inside double quotes
        b: "Potassium thiocyanate",                  ///// Write the option 2 inside double quotes
          c: "Dimethyl Formamide",
	  d: "Sodium iodide",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


      {
      question: "4. What mol/l of Urea acts as a Chaotrophic chemical denaturant?  ",  ///// Write the question inside double quotes
      answers: {
        a: "7-14 mol/l",                  ///// Write the option 1 inside double quotes
        b: "6-8 mol/l",                  ///// Write the option 2 inside double quotes
        c: "10 -12 mol/l",
	d: "2-4 mol/l",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
 

      {
      question: "5.  Acids and bases denature a protein by disrupting: ",  ///// Write the question inside double quotes
      answers: {
        a: "peptide bonds and ionic bonds",                  ///// Write the option 1 inside double quotes
        b: "hydrophobic interactions and peptide bonds",                  ///// Write the option 2 inside double quotes
        c: "ionic bonds and hydrogen bonds",
	d: "amide bonds and alkene bonds"
	e: "ionic bonds and hydrophobic interactions"
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


      {
      question: "6. What kind of interactions are not part of the protein tertiary structure ?  ",  ///// Write the question inside double quotes
      answers: {
        a: "disulphide bonds",                  ///// Write the option 1 inside double quotes
        b: "hydrophobic interactions",                  ///// Write the option 2 inside double quotes
        c: "salt bridges",
	d: "hydrophilic interactions",
	e: "peptide bonds",	  
	  
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


      {
	  question: "7. The most important contribution to the stability of a protein's conformation appears to be the:  ",  ///// Write the question inside double quotes
      answers: {
        a: "entropy increase from the decrease in ordered water molecules forming a solvent shell around it.",                  ///// Write the option 1 inside double quotes
        b: "maximum entropy increase from ionic interactions between the ionized amino acids in a protein.",                  ///// Write the option 2 inside double quotes
        c: "sum of free energies of formation of many weak interactions among the hundreds of amino acids in a protein",

	d: "sum of free energies of formation of many weak interactions between its polar amino acids and surrounding water.",
	  
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


      {
      question: "8. Which of the following chemical denaturant is a cross-linking reagent?  ",  ///// Write the question inside double quotes
      answers: {
        a: "Formaldehyde",                  ///// Write the option 1 inside double quotes
        b: "Dimethyl Formamide.",                  ///// Write the option 2 inside double quotes
        c: "Formamide.",
	d: "Sodium dodecyl sulphate.",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },


       {
      question: "9. An average protein will not be denatured by:  ",  ///// Write the question inside double quotes
      answers: {
        a: "a detergent such as sodium dodecyl sulfate.",                  ///// Write the option 1 inside double quotes
        b: "iodoacetic acid.",                  ///// Write the option 2 inside double quotes
        c: "heating to 90°C.",
	d: "urea.",
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

			  
     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
