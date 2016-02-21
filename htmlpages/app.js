//document is the name of the object, no need for quotes on the particular word
//read method means it waits to load page until everyting is ready
//function is a keyword, anonomous, wont to anything until page loads because of .ready method
$(document).ready(function(){
 $('li').hover(function(){
		$(this).css("opacity", .25);
			}, function(){
				$(this).css("opacity", 1);
			});		
 	
 $('li').click(function(){
	$(this).css("background-color", '#01030F');
		}, function(){
			$(this).css("background-color", '#FCFCFC');
		});		
 $('div.new-words').click(function(){ //try the .replacewith function here. should work more neatly maybe
 	$(this).after("<br>Hello, Clicked!</br>");
});
// $('h1').click(function(){
// 	$('h1').fadeToggle()
// });
// $( "div" ).click(function() {
//   var color = $( this ).css( "background-color" );
//   $( "#result" ).html( "That div is <span style='color:" +
//     color + ";'>" + color + "</span>." );
// });



});





//When the user clicks on a <li>, the word 'Clicked!' should appear inside it.



 // $('li').delay(1200).fadeIn(800);


// 	// $( "li" ).hover(
//  //  function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span:last" ).remove();
//   }
// );
 
// $( "li.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });
//  });