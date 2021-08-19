window.onload = () => {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;


    // sinewave();
    // sinewaveMotion();
    // growShrink();
    fadeInOut();

    function sinewave() {
        context.translate(0, height / 2);
        context.scale(1, -1);
        for (var angle = 0; angle < Math.PI * 2; angle += .01) {
            var x = angle * 200,
                y = Math.sin(angle) * 200;

            context.fillRect(x, y, 5, 5);
        }
    }



    function sinewaveMotion() {
        var centerY = height * .5,
            centerX = width * .5,
            offset = height * .4,
            speed = 0.1,
            angle = 0;

        render();

        function render() {
            var y = centerY + Math.sin(angle) * offset;

            context.clearRect(0, 0, width, height);
            context.beginPath();
            context.arc(centerX, y, 50, 0, Math.PI * 2, false);
            context.fill();

            angle += speed;

            requestAnimationFrame(render);
        }
    }

    function growShrink() {
        var centerY = height * .5,
            centerX = width * .5,
            baseRadius = 100,
            offset = 50,
            speed = 0.1,
            angle = 0;

        render();

        function render() {
            var radius = baseRadius + Math.sin(angle) * offset;

            context.clearRect(0, 0, width, height);
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
            context.fill();

            angle += speed;

            requestAnimationFrame(render);
        }
    }

    function fadeInOut() {
        var centerY = height * .5,
            centerX = width * .5,
            baseAlpha = 0.5,
            offset = 0.5,
            speed = 0.025,
            angle = 0;

        render();

        function render() {
            var alpha = baseAlpha + Math.sin(angle) * offset;

            context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
            context.clearRect(0, 0, width, height);
            context.beginPath();
            context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
            context.fill();

            angle += speed;

            requestAnimationFrame(render);
        }
    }




}

