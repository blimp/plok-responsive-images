require 'plok/responsive_images/version'
require 'plok/responsive_images/image'
require 'plok/responsive_images/helper'
require 'plok/responsive_images/rails/engine' if defined?(::Rails)

module PlokResponsiveImages
  module Rails
  end
end

if defined? ActionView
  ActionView::Base.send(:include, Plok::ResponsiveImages::Helper)
end
