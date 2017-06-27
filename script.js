// ✈️✈️🚀🚀🚀JAVASCRIPT LETS GET IT!!! 🚀🚀🚀✈️✈️
const scrollLine = document.querySelector('.scroll-line');

  function fillScrollLine() {
    const windowHeight      = window.innerHeight;
    const fullHeight        = document.body.clientHeight;
    const scrolled          = window.scrollY;
    const percentScrolled   = (scrolled / (fullHeight - windowHeight)) * 100;

    scrollLine.style.width  = `${percentScrolled}%`;

    
  }



  window.addEventListener('scroll', debounce(fillScrollLine));
  


  //Debounce: Make it run every so offtend
  function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};