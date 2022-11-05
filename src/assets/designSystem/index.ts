export const palette = {
  valentino: '#362C36',
  gunPowder: '#4D4C59',
  raven: '#71777D',
  morningGlory: '#A7CBD5',
  alabaster: '#F7F6F0',
  white: '#FFFFFF',
  black: '#000000',
  gray1: '#DDD6D5',
  transparent: 'rgba(0, 0, 0, 0)',
};

export const theme = {
  colors: {
    white: palette.white,
    black: palette.black,
    fontDark: palette.valentino,
    fontLight: palette.white,
    primary: palette.gunPowder,
    dark: palette.valentino,
    gray: palette.raven,
    secondary: palette.morningGlory,
    light: palette.alabaster,
    lightGray: palette.gray1,
  },

  fonts: {
    inter: {
      /**
       * 900
       */
      black: 'Inter-Black',

      /**
       * 800
       */
      extraBold: 'Inter-ExtraBold',

      /**
       * 700
       */
      bold: 'Inter-Bold',

      /**
       * 600
       */
      semiBold: 'Inter-SemiBold',

      /**
       * 500
       */
      medium: 'Inter-Medium',

      /**
       * 400
       */
      regular: 'Inter-Regular',

      /**
       * 300
       */
      light: 'Inter-Light',

      /**
       * 200
       */
      extraLight: 'Inter-ExtraLight',

      /**
       * 100
       */
      thin: 'Inter-Thin',
    },
  },
};
