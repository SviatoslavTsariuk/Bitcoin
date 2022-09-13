const course = document.getElementById('course');
const sum = document.getElementById('sum');
const answer = document.getElementById('answer');
const submit = document.getElementById('submit');

const calculateNumberBitcoins = () => {
    answer.textContent = (+sum.value / +course.value).toFixed(7)
}

submit.addEventListener('click', calculateNumberBitcoins);