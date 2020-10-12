




let btn = document.querySelector(".knopka"),
    elem  = document.querySelector(".blue");

    function animation () {
        let pos = 0;


        let id = setInterval(frame, 10);

        function frame () {
            if (pos == 220) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }


btn.addEventListener('click', animation);