describe('plok/breakpoint.js', function() {
  describe('#lteq', function() {
    describe('when currentBreakpoint is "medium"', function() {
      beforeEach(function() {
        currentBreakpoint = 'medium';
      });

      it('returns false when the given breakpoint is "xSmall"', function(){
        expect(plok.breakpoint.lteq('xSmall')).toEqual(false);
      });

      it('returns false when the given breakpoint is "small"', function(){
        expect(plok.breakpoint.lteq('small')).toEqual(false);
      });

      it('returns true when the given breakpoint is "medium"', function(){
        expect(plok.breakpoint.lteq('medium')).toEqual(true);
      });

      it('returns true when the given breakpoint is "large"', function(){
        expect(plok.breakpoint.lteq('large')).toEqual(true);
      });

      it('returns true when the given breakpoint is "xLarge"', function(){
        expect(plok.breakpoint.lteq('xLarge')).toEqual(true);
      });

      it('returns true when the given breakpoint is "xxLarge"', function(){
        expect(plok.breakpoint.lteq('xxLarge')).toEqual(true);
      });
    });
  });

  describe('#gteq', function() {
    describe('when currentBreakpoint is "medium"', function() {
      beforeEach(function() {
        currentBreakpoint = 'medium';
      });

      it('returns true when the given breakpoint is "xSmall"', function(){
        expect(plok.breakpoint.gteq('xSmall')).toEqual(true);
      });

      it('returns true when the given breakpoint is "small"', function(){
        expect(plok.breakpoint.gteq('small')).toEqual(true);
      });

      it('returns true when the given breakpoint is "medium"', function(){
        expect(plok.breakpoint.gteq('medium')).toEqual(true);
      });

      it('returns false when the given breakpoint is "large"', function(){
        expect(plok.breakpoint.gteq('large')).toEqual(false);
      });

      it('returns false when the given breakpoint is "xLarge"', function(){
        expect(plok.breakpoint.gteq('xLarge')).toEqual(false);
      });

      it('returns false when the given breakpoint is "xxLarge"', function(){
        expect(plok.breakpoint.gteq('xxLarge')).toEqual(false);
      });
    });
  });
});
