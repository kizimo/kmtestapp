/*
Write a web program that inputs a number from the user. If the number is a multiple of 4, output 'IBM'. If the number is a multiple of 7, output 'Bluemix'. Finally, if it's a multiple of 4 and 7, output 'IBM Bluemix'. 
*/

var KMtest = KMtest || {};

KMtest = function(){};

KMtest.answerJson = [
	{
		id: 'failModal'
	},{
		id: 'ibmModal', 
		txt: 'I B M' 
	}, {
		id: 'bluemixModal', 
		txt: 'blue mix' 
	}, {
		id: 'ibmbluemixModal', 
		txt: 'I B M blue mix' 
	}
];

KMtest.prototype.simpleEval = function(n)
{
	$('#infoAlert').hide();
	$('#nanAlert').hide();
	n = (typeof n === 'undefined')?document.getElementById('inputtext').value:n;
	if (isNaN(n))
	{
		$('#nanAlert').show();
		return true;
	}
	if (KMtest.prototype.isWholeNumber(n / 4) && !KMtest.prototype.isWholeNumber(n / 7))
	{
		KMtest.prototype.updateView( KMtest.answerJson[1] );
	}
	else if (!KMtest.prototype.isWholeNumber(n / 4) && KMtest.prototype.isWholeNumber(n / 7))
	{
		KMtest.prototype.updateView( KMtest.answerJson[2] );
	}
	else if (KMtest.prototype.isWholeNumber(n / 4) && KMtest.prototype.isWholeNumber(n / 7))
	{
		KMtest.prototype.updateView( KMtest.answerJson[3] );
	}
	else
	{
		KMtest.prototype.updateView( KMtest.answerJson[0], function()
		{
			KMtest.prototype.playFailSound();
		});
	}
};

KMtest.prototype.advEval = function(n)
{
	$('#infoAlert').hide();
	$('#nanAlert').hide();
	n = (typeof n === 'undefined')?document.getElementById('inputtext').value:n;
	if (isNaN(n))
	{
		$('#nanAlert').show();
		return true;
	}
	var newArray = [];
	var count = 0;
	newArray = $.map( [ 4 , 7 ], function( v, i ){
		return KMtest.prototype.isWholeNumber(n / v)
	});
	$.each( newArray, function( i, v ){
		count = (v)?((i === 0)?1:count+2):((i === 0)?0:count);
	});
	KMtest.prototype.updateView( KMtest.answerJson[count], function()
	{
		if (count === 0) KMtest.prototype.playFailSound();
	});
};

KMtest.prototype.isWholeNumber = function(n)
{
	return (n == Math.floor(n)) ? true : false;
};
	
KMtest.prototype.genRandNum = function()
{
	document.getElementById('inputtext').value = Math.floor((Math.random() * 500) + 1);
};

KMtest.prototype.updateView = function( jso, cb )
{
	if ( jso.hasOwnProperty('id') ) $( '#'+jso.id ).modal( 'show' );
	if ( jso.hasOwnProperty('txt') ) window.speechSynthesis.speak( new SpeechSynthesisUtterance( jso.txt ) );
	if (typeof cb === 'function') cb();
};


KMtest.prototype.playFailSound = function( cb )
{
	var failAudio = document.getElementById("failAudio"); 
	failAudio.play(); 
	if (typeof cb === 'function') cb();
} 