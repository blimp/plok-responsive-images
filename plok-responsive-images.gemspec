
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "plok/responsive_images/version"

Gem::Specification.new do |spec|
  spec.name          = "plok-responsive-images"
  spec.version       = Plok::ResponsiveImages::VERSION
  spec.authors       = ["davelens"]
  spec.email         = ["github@davelens.be"]

  spec.summary       = %q{Provides JS functionality to deal with images in a responsive design.}
  spec.description   = %q{Includes responsive breakpoints, configurable image versions per breakpoint, and deferral of images below the fold.}
  spec.homepage      = "https://github.com/blimp/plok-responsive-images"
  spec.license       = "MIT"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.files        = `git ls-files`.split("\n")
  spec.executables  = `git ls-files -- bin/*`.split("\n").map { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 2.2.3"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end
