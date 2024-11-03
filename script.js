$(function () {
	var messages = [],
		index = 0;

	messages.push(
		"The greatest prayer ever prayed. The prayer Jesus prayed from the cross is the epitome of the Christian faith and is the core of what it means to be a believer."
	);
	
	messages.push(
		"And when they were come to the place, which is called Calvary, there they crucified him, and the malefactors, one on the right hand, and the other on the left. "
	);
	messages.push(
		" 34 Then said Jesus, Father, forgive them; for they know not what they do. And they parted his raiment, and cast lots."
	);
	
	

	function cycle() {
		$("#id").html(messages[index]);
		index++;

		if (index === messages.length) {
			index = 0;
		}

		setTimeout(cycle, 30000);
	}

	cycle();
});