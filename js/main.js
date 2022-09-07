
let open = document.getElementById('opendoor');

open.addEventListener('click',function(){
	let image = document.getElementById("openClose");
	  if (image.src.match("open")) {
	    image.src = "img/close.jpg";
	    document.getElementById('opendoor').innerHTML = "Open";
	  } else {
	    image.src = "img/open.jpg";
	   document.getElementById('opendoor').innerHTML = "Close";
	  }
	});