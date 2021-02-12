module Plok
  module ResponsiveImageHelper
    def lazy_image_tag(path, options = {})
      options[:data] ||= {}
      options[:data].store(:defer, path)
      image_tag('', options)
    end

    def responsive_image(versions: {})
      Plok::ResponsiveImage.new(versions: versions, view_context: self)
    end

    def responsive_image_tag(versions: {}, lazy: false, html: {})
      responsive_image(versions: versions).html(lazy: lazy, html: html)
    end
  end
end
