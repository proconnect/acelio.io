 $(document).ready(function(){
 	// Hamburger
 	 	$('.nav #hamburger').click(function(){
 		$('.nav ul').slideToggle('fast');
 	}); 
 	 	  
 	var navOffset = $(".nav").offset().top;  
 	
 	$(window).scroll(function(){
 		var scrollPos = $(window).scrollTop();
 
 		if (scrollPos >= navOffset){
 			$(".nav").addClass("fixed");
 		}else{
 			$("nav").removeClass("fixed"); 	
 		}
   
 	});    
  
 	// About Me Section  
 	$('#bio article p, #bio article ul li').hide();
 	$('#bio figure p, #bio figure ul li').hide();
 	$('#bio thumbnails').hide(); 

 	$('#bio article h2').click(function(e){
 		e.preventDefault();
 		if(!$(this).hasClass('active')){
			 	$('#bio article p, #bio article ul li').slideToggle('fast').addClass('active');			 	
			 } else {
			 	$(this).removeClass('active');
			 }	 		
 	});

 	$('#bio figure h2').click(function(e){
 		e.preventDefault();
 		if(!$(this).hasClass('active')){
			 	$('#bio figure p,  #bio figure ul li').slideToggle('fast').addClass('active');			 	
			 } else {
			 	$(this).removeClass('active');
			 }	 		
 	}); 

	 $('#ccf article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
				 	$('#ccf article .hide').slideToggle('fast').addClass('active');			 	
				 } else {
				 	$(this).removeClass('active');
				 }	 		
	 	});

	 $('#dogs article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#dogs article .hide').slideToggle('fast').addClass('active');
	 		} else {
	 			$(this).remnoveClass('active');
	 		}
	 }); 

	 $('#el3phant article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#el3phant article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });


	 $('#fou article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#fou article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });

	 $('#spotx article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#spotx article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });

	 $('#wb article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#wb article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });

	 $('#contact article .readmore').click(function(e){
	 		e.preventDefault();
	 		if(!$(this).hasClass('active')){
	 			$('#contact article .hide').slideToggle('fast').addClass('active');	 			
	 		} else {
	 			$(this).removeClass('active');
	 		}
	 });


	 // Block #WB button from firing!

		//  $(window).resize(function(){     

	 	//      if ($(window).width() <= 980 ){
	 	//     		alert("980 detected!");
	 	//            // is mobile device

	 	//     		}

		//  });

	

 });  

