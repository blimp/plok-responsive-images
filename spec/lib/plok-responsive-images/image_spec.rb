RSpec.describe PlokResponsiveImages::Image do
  let(:view) { double(:view_context) }

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
end
