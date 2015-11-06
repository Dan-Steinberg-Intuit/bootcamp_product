// define the text segments
var regularIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
var hipsterIpsum = "Tousled gentrify pop-up, hammock pariatur deserunt you probably haven't heard of them. Shabby chic artisan ullamco, gastropub labore cold-pressed mixtape pug. Synth organic blue bottle nesciunt pariatur sapiente fugiat, eiusmod ad sustainable accusamus. DIY yuccie bicycle rights jean shorts, pour-over brooklyn dreamcatcher anim yr blog aesthetic scenester incididunt church-key post-ironic. Tattooed jean shorts before they sold out, chartreuse dolor bicycle rights freegan offal polaroid ea lumbersexual enim actually. Pitchfork microdosing swag, hella aute flannel direct trade taxidermy eiusmod venmo +1 duis biodiesel nisi hashtag. Veniam tofu kombucha echo park you probably haven't heard of them.";
var liquorIpsum = "Liquor ipsum dolor sit amet lime rickey dalmore tobermory salmiakki koskenkorva, tortor zurracapote quisque; glen garioch hanky-panky. Quam primis egestas nulla chartreuse cursus id caridan glenlivet aenean dictumst bull shot proin, bengal, etiam, libero edradour; irish mist nunc. Metus, cherry herring vitae caipirinha. Mattis godfather grog et donec craigellachie litora nisi vehicula elit donec, felis interdum eleifend dui primis lectus habitasse edradour moscow mule pharetra mattis. Venenatis nostra, morbi, eleifend feugiat cursus bananarita habitasse link up bloody mary; velit johnny walker black facilisis. Arcu royal bermuda cocktail 7 crown pellentesque hurricane tortor porta in pretium enim clynelish, cras savoy affair.";


function ChangeText(e) {

	// select which piece of text to use
	var text = "";
	switch (e.currentTarget.id) {
		case "regIpsum":
			text = regularIpsum;
			break;

		case "hipIpsum":
			text = hipsterIpsum;
			break;
			
		case "boozeIpsum":
			text = liquorIpsum;
			break;			
	}

	// If there is old text, fade it out and 
	// then fade in the new stuff when done
	if ($(".results-box").is(":visible")) {
		$(".results-box").fadeOut(1500, function() {
			SetNewText(text)
		})
	} else {
		// Else just fade the new stuff in now
		SetNewText(text);
	}

}

// Sets the next text and fade in
function SetNewText(newText) {
	$(".results-box").text(newText);
	$(".results-box").fadeIn(1500);
}


// Main function
$(function() {

	// set up the click handlers
	$("button").click(ChangeText);
});
