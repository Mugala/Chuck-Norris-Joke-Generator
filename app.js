document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e){
  const number = document.querySelector('input[type = "number"]').value;

  console.log(number);
  e.preventDefault();
}