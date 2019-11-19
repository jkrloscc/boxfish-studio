const size = {
    width: '500px',
    height: '500px'
}

const particleOpt = {
    particles: {
        number: {
            value: 6,
            density: {
                enable: false,
                value_area: 5
            }
        }
        , color: {
            value: '#D1BBC3'
        }
        , shape: {
            type: 'circle'
        }
        , opacity: {
            value: 1,
            random: false,
            anim: {
                enable: false
            }
        }
        , size: {
            value: 5,
            random: false,
            anim: {
                enable: true,
                speed: 2,
                size_min: 1,
                sync: false
            }
        }
        , line_linked: {
            enable: true,
            distance: 1000,
            color: '#9fc0c8',
            opacity: 1,
            width: 1
        }
        , move: {
            enable: true,
            speed: 4,
            direction: 'none',
            random: true,
            out_mode: 'bounce',
            bounce: false
        }
    }
    , retina_detect: true
};


module.exports = {
    size: size,
    particleOpt: particleOpt
};