export const fadeIn = (direction, delay, duration) => {
    return {
        hidden: {
            y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
            opacity: 0,
            x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: duration || 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const scale = (duration, delay) => {
    return {
        hidden: {
            scale: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                duration: duration || 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};
