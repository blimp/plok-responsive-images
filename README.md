# Plok Responsive Images

This gem provides more functionality to deal with images in a responsive design.

## Features
* Usable responsive breakpoints in JavaScript
* Configurable image versions per breakpoint
* Deferral of images below the fold

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'plok-responsive-images', git: 'git@github.com:blimp/plok-responsive-images.git', tag: '1.0.0'
```

And then execute:

    $ bundle

## Usage

In your application.js:

```js
//= require plok/responsive_images
```

Call the following as early as possible in your JavaScript:
```js
plok.responsive_images.init();
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `bundle exec spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the project’s codebases, issue trackers, chat rooms and
mailing lists is expected to follow the [code of
conduct](https://github.com/blimp/plok-responsive-images/blob/master/CODE_OF_CONDUCT.md).
