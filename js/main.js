window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target == target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 40) return;
        c.scrollTop = a + (b - a) / 40 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};


// var text_container = document.getElementById('text_container');
// var type_this = "Click me!";
// var index = 0;
//
//
// function typeText () {
//   if (index <= type_this.length) {
//     text_container.value = type_this.substr(0, index++);
//     setTimeout("typeText()", 300);
// 		text_container.style.color = "red";
//   }
// }
