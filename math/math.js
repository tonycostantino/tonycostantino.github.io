const urlParams = new URLSearchParams(window.location.search);
const range1 = urlParams.get('range1');
const range2 = urlParams.get('range2');

renderMathProblem(range1, range2);

function renderMathProblem(range1, range2) {
	document.getElementById('answer').value = "";
	document.getElementById('value1').innerHTML = generateRandomNumber(range1);
	document.getElementById('value2').innerHTML = generateRandomNumber(range2);
}

document.getElementById('answer').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && parseInt(document.getElementById('answer').value) >= 0) {
        document.getElementById('clickAnswer').click();
    }
});

function checkAnswer(type) {
	var value1 = getIntFromId('value1');
	var value2 = getIntFromId('value2');

	var correctAnswer = 0;
	if (type == 'addition') {
		correctAnswer = value1 + value2;
	} else if (type == 'multiplication') {
		correctAnswer = value1 * value2;
	} else {
		alert('wrong type');
		return;
	}
	if (type == 'multiplication') {
	}

	var currAnswer = parseInt(document.getElementById('answer').value);	
	var answeredCorrectly =  (currAnswer == correctAnswer);
	updateStats(answeredCorrectly);

	renderMathProblem(range1, range2);
}

function updateStats(answeredCorrectly) {
	var totalRight =  getIntFromId('totalRight');
	var totalAttempted =  getIntFromId('totalAttempted');
	totalAttempted++;

	if (answeredCorrectly) {
		totalRight++;
	}
	var percentRight = 0;

	if (totalRight > 0 ) {
		percentRight = ((totalRight/totalAttempted) * 100).toFixed(2);
	}

	document.getElementById('totalRight').innerHTML = totalRight;
	document.getElementById('totalAttempted').innerHTML = totalAttempted;
	document.getElementById('percentRight').innerHTML = percentRight;
}


function getIntFromId(elementId) {
	return parseInt(document.getElementById(elementId).innerHTML.trim());	
}


function generateRandomNumber(range) {
	return Math.round(Math.random() * range);
}
