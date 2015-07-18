/*
Write a web program that inputs a number from the user. If the number is a multiple of 4, output 'IBM'. If the number is a multiple of 7, output 'Bluemix'. Finally, if it's a multiple of 4 and 7, output 'IBM Bluemix'. 
*/

var KMtest = KMtest || {};

KMtest = function()
{};

KMtest.prototype.simpleEval = function(n)
{
	function isWholeNumber(n)
	{
		return (n == Math.floor(n)) ? true : false;
	};
	if (isWholeNumber(n / 4) && !isWholeNumber(n / 7))
	{
		document.getElementById('result').innerHTML='IBM';
	}
	else if (!isWholeNumber(n / 4) && isWholeNumber(n / 7))
	{
		document.getElementById('result').innerHTML='Bluemix';
	}
	else if (isWholeNumber(n / 4) && isWholeNumber(n / 7))
	{
		document.getElementById('result').innerHTML='IBM Bluemix';
	}
	else
	{
		document.getElementById('result').innerHTML='no match'
	}
};