$(document).ready(function()
  {
    var currentQuestion;
    var randomNumberGenerator = function (size)
    {
      return Math.ceil(Math.random() * size);
    }

  var questionGenerator = function ()
  {
    var question = {};
    var num1 = randomNumberGenerator(10);
    var num2 = randomNumberGenerator(10);

    question.answer = num1 + num2;
    question.equation = String(num1) + " + " + String(num2);

    return question;
  }

  var renderNewQuestion = function ()
  {
    currentQuestion = questionGenerator();
    $('#equation').text(currentQuestion.equation);
  }

  var checkAnswer = function (userInput, answer)
  {
    if (userInput === answer)
    {
      renderNewQuestion();
      $('#user-input').val('');
      updateTimeLeft(+1);
    }
  }

  $('#user-input').on('keyup', function ()
  {
    checkAnswer(Number($(this).val()), currentQuestion.answer);
  });

  renderNewQuestion();
// amount of time left the user has
  var timeLeft = 10;
  setInterval(function ()
  {
    console.log('1 sec passed');
  },1000);

  var interval = setInterval(function ()
  {
    timeLeft--;
    $('#time-left').text(timeLeft);
    if (timeLeft === 0)
    {
      clearInterval(interval);
    }
    console.log(timeLeft);
  } ,1000);

  var updateTimeLeft = function(amount)
  {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  }
});
