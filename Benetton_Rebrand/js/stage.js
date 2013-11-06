

function list(el){
	$('#intro').hide();
	$('#foundries').hide();
	$('#overview').hide();
	$('#typeFaces').hide();	
	$('#logo').hide();
	$('#palette').hide();	
	$('#icons').hide();
	$('#bags').hide();	
	$('#tags').hide();
	$('#interactiveScreen').hide();	
	$('#layout').hide();		
	$('#booklet').hide();	
	$('#home').hide();	
	$('#auction').hide();
	$('#spinner').hide();
	$('#foundry').hide();
	$('#launch').hide();	
	$('#collectionRelease').hide();																
	$('#print').hide();			
	$('#video').hide();	
	$(el).fadeIn("slow");	
};

//photo Slider
$(document).ready(function(){
  $('#layout').cycle({
    fx: 'scrollDown',
    speedIn: 2500,
    speedOut: 500,
    timeout: 0,
    next: '#layout' });});

//End Slider	
	