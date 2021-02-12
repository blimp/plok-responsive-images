var plok = plok || {}
plok.scrolled_to = {
  observer: null,

  init: function(selector, process, callback) {
    var bind_observers_with_callback = function(entries){
      plok.scrolled_to.process_observations(entries, process, callback);
    };

    this.observer = new IntersectionObserver(bind_observers_with_callback, { rootMargin: "5% 0%" });
    this.observe(selector, this.observer);
  },

  observe: function(selector) {
    this.query(selector).forEach(function(item){
      plok.scrolled_to.observer.observe(item);
    });
  },

  process_observations: function(entries, process, callback) {
    entries.forEach(function(entry) {
      if(!entry.isIntersecting) return;
      process(entry);
      plok.scrolled_to.observer.unobserve(entry.target);
    });

    if(typeof callback == 'function') callback(entries);
  },

  query: function(selector) {
    return Array.from(document.querySelectorAll(selector));
  }
};
