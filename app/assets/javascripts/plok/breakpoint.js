var plok = plok || {}
var plok.breakpoint = { // Singular because it reads better in conditionals.
  lteq: function(bp) {
    switch(bp) {
      case 'xSmall':
        return currentBreakpoint == 'xSmall'
        break;
      case 'small':
        return currentBreakpoint == 'xSmall' ||
          currentBreakpoint == 'small'
      case 'medium':
        return currentBreakpoint == 'xSmall' ||
          currentBreakpoint == 'small' ||
          currentBreakpoint == 'medium'
        break;
      case 'large':
        return currentBreakpoint == 'xSmall' ||
          currentBreakpoint == 'small' ||
          currentBreakpoint == 'medium' ||
          currentBreakpoint == 'large'
        break;
      case 'xLarge':
        return currentBreakpoint == 'xSmall' ||
          currentBreakpoint == 'small' ||
          currentBreakpoint == 'medium' ||
          currentBreakpoint == 'large' ||
          currentBreakpoint == 'xLarge'
        break;
      case 'xxLarge':
        return true; // Everything is smaller than xxLarge.
        break;
      default:
        return false;
        break;
    }
  },

  gteq: function(bp) {
    switch(bp) {
      case 'xSmall':
        return true; // Everything is bigger or equal to xSmall.
        break;
      case 'small':
        return currentBreakpoint == 'small' ||
          currentBreakpoint == 'medium' ||
          currentBreakpoint == 'large' ||
          currentBreakpoint == 'xLarge' ||
          currentBreakpoint == 'xxLarge';
      case 'medium':
        return currentBreakpoint == 'medium' ||
          currentBreakpoint == 'large' ||
          currentBreakpoint == 'xLarge' ||
          currentBreakpoint == 'xxLarge';
        break;
      case 'large':
        return currentBreakpoint == 'large' ||
          currentBreakpoint == 'xLarge' ||
          currentBreakpoint == 'xxLarge';
        break;
      case 'xLarge':
        return currentBreakpoint == 'xLarge' ||
          currentBreakpoint == 'xxLarge';
        break;
      case 'xxLarge':
        return currentBreakpoint == 'xxLarge';
        break;
      default:
        return false;
        break;
    }
  }
};
