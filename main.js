let out = document.querySelector('.output');

let mark = 34;

if (mark < 30) {
    out.innerHTML = 'hi i am shmaim';
} else {
    out.innerHTML = 'Shamim';
}

function get_result(mark) {
    var r;
    if (mark < 33) {
        r = 'F';
    } else if (mark < 40) {
        r = 'D';
    } else if (mark < 50) {
        r = 'C';
    } else if (mark < 60) {
        r = 'B';
    } else if (mark < 70) {
        r = "A-";
    } else if (mark < 80) {
        r = 'A';
    } else {
        r = 'A+'

    }
    out.innerHTML = r;
}