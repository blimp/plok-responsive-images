module Plok
  module ResponsiveImages
    class Image
      def initialize(view_context: nil, versions: {})
        @view_context = view_context
        @versions = versions
      end

      # Used as a temporary solution to support responsive image tags that aren't
      # lazy.
      def default_version
        return @versions[:large] if @versions.key?(:large)
        return @versions[:medium] if @versions.key?(:medium)
        return @versions[:small] if @versions.key?(:small)
      end

      def interchange
        @versions.inject([]) do |array, pair|
          version, image = pair
          array << "[#{image}, (#{version})]"
          array
        end.join(', ')
      end

      def tag_method(lazy: false)
        return :lazy_image_tag if lazy
        :image_tag
      end

      def html(lazy: false, html: {})
        data_attributes = { responsive: interchange }
        html = html.merge(data: data_attributes)
        @view_context.send(tag_method(lazy: lazy), default_version, html)
      end
    end
  end
end
