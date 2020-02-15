document.getElementById('answer').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('clickAnswer').click();
    }
});

function checkAnswer() {
	var value1 = getIntFromId('value1');
	var value2 = getIntFromId('value2');
	var correctAnswer =  value1 * value2;

	var currAnswer = parseInt(document.getElementById('answer').value);	
	var answeredCorrectly =  (currAnswer == correctAnswer);
	updateStats(answeredCorrectly);
	renderMathProblem();

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
