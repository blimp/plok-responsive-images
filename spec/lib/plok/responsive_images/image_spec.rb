RSpec.describe Plok::ResponsiveImages::Image do
  let(:view) { double(:view_context) }

  describe '#html' do
    let(:attrs) do
      {
        data: {
          responsive: '[small-image.jpg, (small)], [medium-image.jpg, (medium)]'
        }
      }
    end

    it 'returns an image tag with a default image version' do
      versions = {
        small: 'small-image.jpg',
        medium: 'medium-image.jpg'
      }

      expect(view).to receive(:image_tag).with('medium-image.jpg', attrs)
      described_class.new(view_context: view, versions: versions).html
    end

    it 'returns a lazy image tag with a default image version' do
      versions = {
        small: 'small-image.jpg',
        medium: 'medium-image.jpg'
      }

      expect(view).to receive(:lazy_image_tag).with('medium-image.jpg', attrs)
      described_class.new(view_context: view, versions: versions).html(lazy: true)
    end
  end

  describe '#tag_method' do
    it 'returns "lazy_image_tag" when lazy' do
      expect(subject.tag_method(lazy: true)).to eq :lazy_image_tag
    end

    it 'defaults to "image_tag"' do
      expect(subject.tag_method).to eq :image_tag
    end
  end

  describe '#interchange' do
    it 'returns "" by default' do
      expect(subject.interchange).to eq ''
    end

    it 'returns all versions in a workable format (originally copied from Foundation)' do
      versions = {
        small: 'small-image.jpg',
        medium: 'medium-image.jpg'
      }

      subject = described_class.new(view_context: view, versions: versions)
      expected = '[small-image.jpg, (small)], [medium-image.jpg, (medium)]'
      expect(subject.interchange).to eq expected
    end
  end

  describe '#default_version' do
    it 'prioritizes large version, when present' do
      versions = {
        small: 'small-image.jpg',
        medium: 'medium-image.jpg',
        large: 'large-image.jpg'
      }

      subject = described_class.new(view_context: view, versions: versions)
      expect(subject.default_version).to eq 'large-image.jpg'
    end

    it 'prioritizes medium version, when present' do
      versions = {
        small: 'small-image.jpg',
        medium: 'medium-image.jpg'
      }

      subject = described_class.new(view_context: view, versions: versions)
      expect(subject.default_version).to eq 'medium-image.jpg'
    end

    it 'falls back to small version, when present' do
      versions = {
        small: 'small-image.jpg'
      }

      subject = described_class.new(view_context: view, versions: versions)
      expect(subject.default_version).to eq 'small-image.jpg'
    end

    it 'defaults to nil' do
      subject = described_class.new(view_context: view, versions: {})
      expect(subject.default_version).to be nil
    end
  end
end
