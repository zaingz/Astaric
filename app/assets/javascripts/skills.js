$(document).ready(function() {



    var waypoint = new Waypoint({
        element: document.getElementById('skills_box'),
        handler: function(direction) {
            if(direction==="down") {
                $('#circle1').circleProgress({
                    value: 0.89,
                    startAngle: 4.75,
                    thickness: 8,
                    emptyFill: "rgba(0, 0, 0, 0)",
                    size: 170,
                    fill: {
                        gradient: ["#1bbc9b"]
                    }
                });

                $('#circle2').circleProgress({
                    value: 0.87,
                    startAngle: 4.75,
                    thickness: 8,
                    emptyFill: "rgba(0, 0, 0, 0)",
                    size: 170,
                    fill: {
                        gradient: ["#f7941e"]
                    }
                });

                $('#circle3').circleProgress({
                    value: 0.72,
                    startAngle: 4.75,
                    thickness: 8,
                    emptyFill: "rgba(0, 0, 0, 0)",
                    size: 170,
                    fill: {
                        gradient: ["#2ecd71"]
                    }
                });

                $('#circle4').circleProgress({
                    value: 0.78,
                    startAngle: 4.75,
                    thickness: 8,
                    emptyFill: "rgba(0, 0, 0, 0)",
                    size: 170,
                    fill: {
                        gradient: ["#5ea8d9"]
                    }
                });

            }
        } ,offset: 55

    });

});