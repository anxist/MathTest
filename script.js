let button = document.getElementById('finish');

button.addEventListener("click", test);

function test() {
    let result = 0;

    let a1 = document.getElementById("q1").value;
    if (a1 === '4') {
        result++;
    }

    let a2 = document.getElementById("q2").value;
    if (a2 === '6') {
        result++;
    }

    let a3 = document.getElementById("q3").value;
    if (a3 === '2') {
        result++;
    }

    let a4 = document.getElementById("q4").value;
    if (a4 === '100') {
        result++;
    }

    let a5 = document.getElementById("q4").value;
    if (a5 === '30') {
        result++;
    }

    let a6 = document.getElementById("q4").value;
    if (a6 === '30') {
        result++;
    }

    alert('Количество правильных ответов: ' + result);
}