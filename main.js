var answers = [
'yes',
'no']

function answer() {
    var random = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answer').innerHTML = random;

    if (random == 'no'){
        document.getElementById("img").innerHTML = "<img src='trump.jpg'>";
    }else {
        document.getElementById("img").innerHTML = "<img src='yes.jpg'>";
    }

};


