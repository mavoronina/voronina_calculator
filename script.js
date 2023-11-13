
let memory_text = document.getElementsByTagName('p')[0]
let display = document.getElementsByTagName('p')[1]
let buttons = document.getElementsByTagName('button')

//console.log(display.innerHTML)
//console.log(memory_text.innerHTML)
//console.log(buttons.length)


let string = "";
let memory = "";
let operators = ['+', '-', '*', '/', '.'];

//console.log(operators);

let arr = Array.from(buttons)
console.log(arr)

arr.forEach(button => {
  button.addEventListener('click', (e) => {

    if (string.length < '9') {
      end_symbol_of_string = string.substring(string.length - 1, string.length);
      console.log('string at the start' + string);
      console.log('string at the end contains operator?' + operators.includes(end_symbol_of_string));
      console.log('last symbol is operator ' + end_symbol_of_string);
      console.log ('button current' + e.target.innerHTML);


      // if last character entered is an operator, replace it with the currently pressed one
      if (operators.includes(end_symbol_of_string) && (operators.includes(e.target.innerHTML)) ) {
        string = string.substring(0, string.length - 1) + e.target.innerHTML;
        console.log('string after replace: ' + string);
        display.innerHTML = string;
      }
      else {
        //console.log ('e.target.innerHTML: '+ e.target.innerHTML)
        if (e.target.innerHTML == '=') {
          console.log('string before operation =: ' + string);
          string = eval(string);
          string = string.toString();
          if (string.length < '9') {
          display.innerHTML = string;
          console.log('string after operation =: ' + string);
          console.log('length string after operation =: ' + string.length);}
          else {
            alert('Too long number. Set it to 0');
            string = '0';
            display.innerHTML = string;
          }
        }
        else if (e.target.innerHTML == 'AC') {
          string = "";
          display.innerHTML = string;
        }
        else if (e.target.innerHTML == '⌫') {
          string = string.substring(0, string.length - 1);
          //console.log('length of string: ' + string.length);
          //display.innerHTML = string;
          if (string.length != '0') { display.innerHTML = string; }
          else { display.innerHTML = ""; }
        }
        else if (e.target.innerHTML == 'MS') {
          memory = string;
          memory_text.innerHTML = memory;
          console.log('saved to memory: ' + memory);
        }
        else if (e.target.innerHTML == 'MR') {
          string = memory;
          display.innerHTML = string;
          console.log('resieved from memory: ' + string);
        }
        else {
          string += e.target.innerHTML;
          display.innerHTML = string;
          console.log('current string: ' + string);
          console.log('current length string: ' + string.length);
        }
      }
    }

    else {
      alert('Big expression!');
      string = string.substring(0, string.length - 1);
    }

  })
})





