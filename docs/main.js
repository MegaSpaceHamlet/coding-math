window.onload = () => {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;


    // sinewave();
    // sinewaveMotionY();
    // growShrink();
    // fadeInOut();
    // sinewaveMotionX();
    // circle();
    // ellipse();
    // lissajousCurve();
    // drawInCircle();
    arctangent();

    function arctangent() {
        let arrowX = width / 2,
            arrowY = height / 2,
            dx, dy,
            angle = 0;

        render();

        function render() {
            context.clearRect(0, 0, width, height);

            context.save();
            context.translate(arrowX, arrowY);
            context.rotate(angle);

            // draw arrow
            context.beginPath();
            context.moveTo(20, 0);
            context.lineTo(-20, 0);
            context.moveTo(20, 0);
            context.lineTo(10, -10);
            context.moveTo(20, 0);
            context.lineTo(10, 10);
            context.stroke();

            context.restore();
            requestAnimationFrame(render);
        }

        document.body.addEventListener("mousemove", (event) => {
            dx = event.clientX - arrowX;
            dy = event.clientY - arrowY;     
            angle = Math.atan2(dy, dx);
        });
    }


    /**
     * Draws number of objects evenly on a circle's perimeter
     * I see a wheel. I feel like this function could be used
     * to create a wheel-turning effect.
     */
    function drawInCircle() {
        let centerX = width / 2,
            centerY = height / 2,
            radius = 200,
            angle = 0,
            numObjects = 10, // can change this variable to see how it affects
            slice = Math.PI * 2 / numObjects,
            x, y;

        context.clearRect(0, 0, width, height);

        for (let i = 0; i < numObjects; i++) {
            angle = i * slice;
            x = centerX + Math.cos(angle) * radius;
            y = centerY + Math.sin(angle) * radius;
            context.beginPath();
            context.arc(x, y, 10, 0, Math.PI * 2, false);
            context.fill();
        }

    }


    function lissajousCurve() {
        let centerX = width / 2,
            centerY = height / 2,
            xRadius = 200,
            yRadius = 400,
            xAngle = 0,
            yAngle = 0,
            xSpeed = .025,
            ySpeed = .010,
            x, y;

        render();

        function render() {
            context.clearRect(0, 0, width, height);
            x = centerX + Math.cos(xAngle) * xRadius;
            y = centerY + Math.sin(yAngle) * yRadius;
            context.beginPath();
            context.arc(x, y, 10, 0, Math.PI * 2, false);
            context.fill();

            xAngle += xSpeed;
            yAngle += ySpeed;
            requestAnimationFrame(render);
        }
    }

    function ellipse() {
        let centerX = width / 2,
            centerY = height / 2,
            xRadius = 200,
            yRadius = 400,
            angle = 0,
            speed = .025,
            x, y;

        render();

        function render() {
            context.clearRect(0, 0, width, height);
            x = centerX + Math.cos(angle) * xRadius;
            y = centerY + Math.sin(angle) * yRadius;
            context.beginPath();
            context.arc(x, y, 10, 0, Math.PI * 2, false);
            context.fill();

            angle += speed;
            requestAnimationFrame(render);
        }
    }

    function circle() {
        let centerX = width / 2,
            centerY = height / 2,
            radius = 200,
            angle = 0,
            speed = .025,
            x, y;

        render();

        function render() {
            context.clearRect(0, 0, width, height);
            x = centerX + Math.cos(angle) * radius;
            y = centerY + Math.sin(angle) * radius;
            context.beginPath();
            context.arc(x, y, 10, 0, Math.PI * 2, false);
            context.fill();

            angle += speed;
            requestAnimationFrame(render);
        }
    }

    function sinewave() {
        context.translate(0, height / 2);
        context.scale(1, -1);
        for (var angle = 0; angle < Math.PI * 2; angle += .01) {
            var x = angle * 200,
                y = Math.sin(angle) * 200;

            context.fillRect(x, y, 5, 5);
        }
    }

    function sinewaveMotionY() {
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

    function sinewaveMotionX() {
        var centerY = height * .5,
            centerX = width * .5,
            offset = height * .4,
            speed = 0.1,
            angle = 0;

        render();

        function render() {
            var x = centerX + Math.sin(angle) * offset;

            context.clearRect(0, 0, width, height);
            context.beginPath();
            context.arc(x, centerY, 50, 0, Math.PI * 2, false);
            context.fill();

            angle += speed;

            requestAnimationFrame(render);
        }
    }
}

