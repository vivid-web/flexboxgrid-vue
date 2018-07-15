# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased
[Compare v1.0.4 - Unreleased](https://github.com/vivid-web/flexboxgrid-vue/compare/v1.0.4...develop)
### Fixed
 - It's possible to pass a `content`-property to all the components as a string.
 - The mixins are now named pascal case.

### Added
 - A `CHANGELOG.md`-file which will hold all the changes to this project.
 - A `LICENSE`-file for displaying the license used for this project.

## [v1.0.4](https://github.com/vivid-web/flexboxgrid-vue/releases/tag/v1.0.4) - 2018-07-12
[Compare v1.0.3 - v1.0.4](https://github.com/vivid-web/flexboxgrid-vue/compare/v1.0.3...v1.0.4)
### Added
 - A variable for the width and height of the gutters.

### Fixed
 - Fixed the Stylus directory structure once more.
 - Use the `percentage` function to calculate the percentage instead of adding a `%`-character.

## [v1.0.3](https://github.com/vivid-web/flexboxgrid-vue/releases/tag/v1.0.3) - 2018-07-09
[Compare v1.0.2 - v1.0.3](https://github.com/vivid-web/flexboxgrid-vue/compare/v1.0.2...v1.0.3)
### Added
 - A `package-lock.json` file for NPM.

### Fixed
 - Set the max-width of a responsive column so that it won't overflow.

## [v1.0.2](https://github.com/vivid-web/flexboxgrid-vue/releases/tag/v1.0.2) - 2018-07-09
[Compare v1.0.1 - v1.0.2](https://github.com/vivid-web/flexboxgrid-vue/compare/v1.0.1...v1.0.2)
### Fixed
 - Using a better directory structure for the stylus files.
 - When a column has no width (`col-0`), use `flex: 0 0 0` instead of `flex: 0 0 0%`.
 - When a column has no offset (`col-offset-0`), use `margin-left: 0` instead of `margin-left: 0%`.

## [v1.0.1](https://github.com/vivid-web/flexboxgrid-vue/releases/tag/v1.0.1) - 2018-07-09
[Compare v1.0.0 - v1.0.1](https://github.com/vivid-web/flexboxgrid-vue/compare/v1.0.0...v1.0.1)
### Fixed
 - Documentation for NPM and Yarn downloads.
 - Make sure that `node_modules` isn't pushed to the NPM registry.

## [v1.0.0](https://github.com/vivid-web/flexboxgrid-vue/releases/tag/v1.0.0) - 2018-07-08
### Added
 - Components for `VCol`, `VRow`, `VGrid` and `VText`.
 - Build configuration.
 - Necessary styling for `v-col`, `v-row`, `v-grid` and `v-text`.
 
