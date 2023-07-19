document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('input[type="text"]');
  const buttons = document.querySelectorAll('button');

  // Adiciona um listener de evento de clique a todos os botões
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.value;

      if (buttonText === '=') {
        try {
          input.value = eval(input.value);
          if (isNaN(input.value)) {
            input.value = 'NaN';
          }
        } catch (error) {
          input.value = 'NaN';
        }
      } else if (buttonText === 'C') {
        input.value = '';
      } else if (buttonText === 'CE') {
        input.value = input.value.slice(0, -1);
      } else {
        input.value += buttonText;
      }
    });
  });
});
