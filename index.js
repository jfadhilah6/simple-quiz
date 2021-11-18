(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} : ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
    
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "JavaScript file has an extension of",
        answers: {
          a: ".java",
          b: ".javascript",
          c: ".js",
          d: ".xml"
        },
        correctAnswer: "c"
      },
      {
        question: "If button is clicked .. event handler is invoked",
        answers: {
          a: "onsubmit()",
          b: "onload()",
          c: "ispostback()",
          d: "onclick()"
        },
        correctAnswer: "d"
      },
      {
        question: `What is the use of document.getElementById("...").innerHTML="[message]"`,
        answers: {
          a: "To show our output in any tool",
          b: "To show our output in only textbox",
          c: "To display answer in alertbox",
          d: "None of above"
        },
        correctAnswer: "a"
      },
      {
        question: "What does HTML stand for?",
        answers: {
          a: "Hyper Text Preprocessor",
          b: "Hyper Text Markup Language",
          c: "Hyper Text Multiple Language",
          d: "Hyper Tool Multi Language"
        },
        correctAnswer: "b"
      },
        {
        question: "How can we declare variabel in JavaScript?",
        answers: {
          a: "Datatype",
          b: "Var",
          c: "Float",
          d: "Int"
        },
        correctAnswer: "b"
      },
        {
        question: ".push() is which type of function",
        answers: {
          a: "Date and time",
          b: "String",
          c: "Array",
          d: "Maths/Numeric"
        },
        correctAnswer: "c"
      },
        {
        question: "Script tag used in which part tag is used in",
        answers: {
          a: "Only head tag",
          b: "Only body tag",
          c: "Head tag and body tag both",
          d: "None of above"
        },
        correctAnswer: "c"
      },
        {
        question: "If we want to print any message in message box we use ... in javascript",
        answers: {
          a: "Promptbox",
          b: "Alertbox",
          c: "Confirmbox",
          d: "None of above"
        },
        correctAnswer: "b"
      },
        {
        question: "Take choice from user either yes and no or cancel we use",
        answers: {
          a: "Promptbox",
          b: "Alertbox",
          c: "Confirmbox",
          d: "None of above"
        },
        correctAnswer: "c"
      },
        {
        question: "To take value from user at runtime we use",
        answers: {
          a: "Promptbox",
          b: "Alertbox",
          c: "Confirmbox",
          d: "None of above"
        },
        correctAnswer: "a"
      },
    ];

    buildQuiz();
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  