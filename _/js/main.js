$(document).ready(function(){
		

    $(".class").click(function(){

        // do something here



        // alter css
        $(".class").css("background", "#fff");

    });


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


// SMARTPHONE NAV ANIMATIONS
//------------------------------------------------------------------------
    
    var navShown = false;
    var menuTapped = false;
    
    // smartphone menu control
    $(".menu").click(function(){

        menuTapped=true;

        if(navShown){
            resetNav();
        }else{
            showNav();
        }

    });

   
    function resetNav(){
        $("nav").css("left", "320px");
        $(".logo").css("left", "0px");
        $(".menu").css("background-image", "url('images/menu-open.png')");
        $(".menu").css("top", "12px");
        $("header").css("height", "50px");
        navShown=false;
    };

    function showNav(){
        $("nav").css("left", "-50px");
        $(".logo").css("left", "-320px");
        $(".menu").css("background-image", "url('images/menu-close.png')");
        $(".menu").css("top", "30px");
        $("header").css("height", "80px");
        navShown=true;
    };
    

    // run when window is resized
    $(window).resize(function() {
        
        // if menu icon has been tapped (css elements have been messed with)
        if(menuTapped){
            // if resized to full screen
            if ($(".menu").css("display") == "none"){

                $("header").css("height", "100px");
            }else{
                resetNav();
            }
        }
            
    });


			
				
    
    
			
});