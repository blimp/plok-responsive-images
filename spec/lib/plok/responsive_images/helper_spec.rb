RSpec.describe Plok::ResponsiveImages::Helper do
  include described_class

  describe '#lazy_image_tag' do
    it 'assigns the defer data attribute, and calls #image_tag' do
      options = { data: { defer: 'plok/foo.jpg' } }
      expect(self).to receive(:image_tag).with('', options)
      lazy_image_tag('plok/foo.jpg')
    end
  end

  describe '#responsive_image' do
    it 'returns an Image instance' do
      expect(responsive_image).to be_instance_of Plok::ResponsiveImages::Image
    end
  end

  describe '#responsive_image_tag' do
    let(:attrs) do
      {
        data: {
          responsive: '[small-image.jpg, (small)], [medium-image.jpg, (medium)]'
        }
      }
    end

    it 'returns a regular image tag' do
      view = double(:view_context)
      versions = {
        small: 'small-image.jpg',
        medium: 'medium-image.jpg'
      }

      expect(self).to receive(:image_tag).with('medium-image.jpg', attrs)
      responsive_image_tag(versions: versions)
    end

    it 'returns a lazy image tag' do
      view = double(:view_context)
      versions = {
        small: 'small-image.jpg',
        medium: 'medium-image.jpg'
      }

      expect(self).to receive(:lazy_image_tag).with('medium-image.jpg', attrs)
      responsive_image_tag(versions: versions, lazy: true)
    end
  end
end
