/* ---------------------------------------------------- */
/*  Github: https://github.com/SZUMASTER	        */
/*  License: MIT [https://opensource.org/licenses/MIT]  */
/* ---------------------------------------------------- */ 

// Config
particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 600
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 3
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 4,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 10,
                    "opacity_min": 0.5,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 3,
                    "size_min": 0.5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.5,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 10,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 800
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 50,
                    "line_linked": {
                        "opacity": 0.9
                    }
                },
                "bubble": {
                    "distance": 100,
                    "size": 10,
                    "duration": 3,
                    "opacity": 8,
                    "speed": 10
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 5
                },
                "remove": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }
);