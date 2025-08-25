import { Variants } from 'framer-motion';

export const fadeUpSpring = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 60,
    },
  },

  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 60,
    },
  },
};

export const fadeLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    x: -200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};

export const fadeBottom = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: -200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


export const fadeRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    x: 200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};

export const fadeTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


export const experience_1 = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


export const experience_2 = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


export const experience_3 = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: 150,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};

export const motionStep = {
  initial : "hidden",
  whileInView : "visible",
  viewport : { once: true }
}