;(function () {
    var link_0 = document.getElementById('link_0'),
        link_1 = document.getElementById('link_1'),
        link_3 = document.getElementById('link_3'),
        link_4 = document.getElementById('link_4'),
        link_5 = document.getElementById('link_5'),
        link_6 = document.getElementById('link_6'),
        link_7 = document.getElementById('link_7');

    var MINWIDTH = 960;

    /**
     * Move two blocks according direction
     * @param item1 {string} suffix for first block's class
     * @param item2 {string} suffix for second block's class
     * @param direction {string} direction of moving
     */
    function move(item1, item2, direction) {
        document.querySelector('.slider__item--' + item1).classList.add('move-' + direction + '-out');
        document.querySelector('.slider__item--' + item2).classList.add('move-' + direction);
    }

    /**
     * Remove two blocks according direction
     * @param item1 {string} suffix for first block's class
     * @param item2 {string} suffix for second block's class
     * @param direction {string} direction of removing
     */
    function remove(item1, item2, direction) {
        document.querySelector('.slider__item--' + item1).classList.remove('move-' + direction + '-out');
        document.querySelector('.slider__item--' + item2).classList.remove('move-' + direction);
    }

    function moveSlider(item1, item2, direction) {
        console.log(this);
        var windowWidth = document.documentElement.clientWidth;
        console.log('windowWidth= ' + windowWidth);
        if (windowWidth > MINWIDTH) {
            e.preventDefault();
            move(item1, item2, direction);
        }
    }

    link_1.addEventListener('click', function (e) {
        console.log(this);
        var windowWidth = document.documentElement.clientWidth;
        console.log('windowWidth= ' + windowWidth);
        if (windowWidth > MINWIDTH) {
            e.preventDefault();
            move('1', '2', 'top');
        }
    });

/*
    link_1.addEventListener('click', function (e) {
        moveSlider('1', '2', 'top');
    });
*/
    link_0.addEventListener('click', function (e) {
        console.log(this);
        e.preventDefault();
        remove('1', '2', 'top');
    });

    link_2.addEventListener('click', function (e) {
        console.log(this);
        var windowWidth = document.documentElement.clientWidth;
        console.log('windowWidth= ' + windowWidth);
        if (windowWidth > MINWIDTH) {
            e.preventDefault();
            move('2', '3', 'right');
        }
    });

    link_5.addEventListener('click', function (e) {
        console.log(this);
        var windowWidth = document.documentElement.clientWidth;
        console.log('windowWidth= ' + windowWidth);
        if (windowWidth > MINWIDTH) {
            e.preventDefault();
            remove('2', '3', 'right');
        }
    });

    link_4.addEventListener('click', function (e) {
        console.log(this);
        var windowWidth = document.documentElement.clientWidth;
        console.log('windowWidth= ' + windowWidth);
        if (windowWidth > MINWIDTH) {
            e.preventDefault();
            move('2', '4', 'left');
        }
    });

    link_6.addEventListener('click', function (e) {
        console.log(this);
        var windowWidth = document.documentElement.clientWidth;
        console.log('windowWidth= ' + windowWidth);
        if (windowWidth > MINWIDTH) {
            e.preventDefault();
            remove('2', '4', 'left');
        }
    });

    link_3.addEventListener('click', function (e) {
        console.log(this);
        var windowWidth = document.documentElement.clientWidth;
        console.log('windowWidth= ' + windowWidth);
        if (windowWidth > MINWIDTH) {
            e.preventDefault();
            document.querySelector('.slider__item--2').classList.remove('move-top');
            move('2', '5', 'top');
        }
    });

    link_7.addEventListener('click', function (e) {
        console.log(this);
        var windowWidth = document.documentElement.clientWidth;
        console.log('windowWidth= ' + windowWidth);
        if (windowWidth > MINWIDTH) {
            e.preventDefault();
            document.querySelector('.slider__item--2').classList.add('move-top');
            remove('2', '5', 'top');
        }
    });
})();
