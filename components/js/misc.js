$(document).ready(function(){
		
// HELPER CLASSES
//------------------------------------------------------------------------

    // class to prevent reloading page for buttons
    $(".prevent-default").click(function(e) { 
        e.preventDefault();        
    }); 

    // subtext auto year
    // add .year class to a span to get current year
    // e.g.: copyright your name <span class=".year"></span>
    var year = new Date().getFullYear();
    $( ".year" ).append( year );

			
});