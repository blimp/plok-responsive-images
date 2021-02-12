var plok = plok || {}
plok.responsive_images = {
  // TODO: Extract this from the gem source; to be used in projects.
  init: function() {
    plok.scrolled_to.init('[data-defer]', this.defer.init);
    bsBreakpoints.init();
    $(window).on('new.bs.breakpoint', this.responsive.breakpoint_listener);
  },

  defer: {
    init: function(observer_entry) {
      plok.responsive_images.defer.process_image($(observer_entry.target));
    },

    process_image: function(element) {
      var source = plok.responsive_images.defer.extract_path(element);

      if(element.is('img')) {
        element.attr('src', source);
      } else {
        element.css('background-image', 'url('+ source +')');
      }
    },

    extract_path: function(element) {
      if(element.data('responsive')) {
        return plok.responsive_images.responsive.extract_path(element.data('responsive'));
      } else {
        return element.data('defer'); // Value of defer should have a path.
      }
    }
  },

  responsive: {
    breakpoint_listener: function(e) {
      $('[data-responsive]').each(function(){
        var element = $(this);
        var versions = element.data('responsive');

        if(element.is('img')) {
          element.attr('src', plok.responsive_images.responsive.extract_path(versions));
        } else {
          element.css('background-image', 'url('+ plok.responsive_images.responsive.extract_path(versions) +')');
        }
      });
    },

    // Example string:
    // [/uploads/assets/_cache/15/1c/fill-q50-410x230-fd3b8137.jpg, (small)], [/uploads/assets/_cache/15/1c/fill-q70-420x210-fd3b8137.jpg, (medium)]
    extract_path: function(string) {
      var images = this.versions(string);
      var breakpoints = new RegExp(Object.keys(breakPoints).join('|'), 'g');
      var match = string.match(breakpoints);

      if(match && match.includes(currentBreakpoint)) {
        // An exact breakpoint match should return the match.
        return images[currentBreakpoint];
      } else {
        return this.extract_default(images);
      }
    },

    // Sorting to closest approximation of breakpoint, depending on their
    // initial order as defined by the breakPoints variable.
    extract_default: function(images) {
      var keys = Object.keys(breakPoints);
      var current = keys.indexOf(currentBreakpoint);
      var list = keys.sort(function(a, b){
        var index = keys.indexOf(b);
        return current - index;
      });

      for (var i = 0; i < list.length; i++) {
        if(list[i] in images) return images[list[i]];
      }
      return '';
    },

    versions: function(s) {
      return s.split('], [').map(function(string){
        return string.replace('[', '').replace(']', '');
      }).reduce(function(result, item){
        var split = item.split(', ');
        result[split[1].replace(/\((.*)\)/ig, '$1')] = split[0];
        return result;
      }, {});
    }
  }
};
