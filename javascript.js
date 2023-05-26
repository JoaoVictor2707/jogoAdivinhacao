    var randomNumber;
    var attempts = 0;

    function newGame() {
      randomNumber = Math.floor(Math.random() * 101);
      attempts = 0;
      document.getElementById('result').innerHTML = '';
      document.getElementById('guessInput').value = '';
    }

    function checkGuess() {
      var guess = parseInt(document.getElementById('guessInput').value);

      if (isNaN(guess) || guess < 0 || guess > 100) {
        document.getElementById('result').innerHTML = 'Digite um número válido entre 0 e 100.';
        return;
      }

      attempts++;

      if (guess === randomNumber) {
        var points = 100 - attempts + 1;
        document.getElementById('result').innerHTML = 'Parabéns! Você acertou em ' + attempts + ' tentativa(s). Pontuação: ' + points;
      } else if (guess < randomNumber) {
        document.getElementById('result').innerHTML = 'Tente um número maior.';
      } else {
        document.getElementById('result').innerHTML = 'Tente um número menor.';
      }
    }

    newGame();
