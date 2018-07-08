# Flexboxgrid Vue #
> flexboxgrid-vue

Flexboxgrid is a modern 12-col grid system based on Bootstrap. It is written in Vue, a simple to
use frontend library. The Flexboxgrid is written according the [BEM](http://getbem.com/)
methodology. For more information, visit
[flexboxgrid.vivid-websolutions.nl](http://flexboxgrid.vivid-websolutions.nl)

## Table of contents ##
 - [Getting started](#getting-started)
    -  [Installation](#installation)
    -  [Configuration](#configuration)
 - [Components](#components)
    -  [VGrid](#vgrid)
    -  [VRow](#vrow)
    -  [VCol](#vcol)
    -  [VText](#vtext)
 - [Authors](#authors)
 - [More Information](#more-information)
 - [License](#license)

## Getting started ##
In this paragraph we will discuss how to install and configure this project.

## Installation ##
To install Flexboxgrid Vue, use one of the following methods.
```bash
$ npm install flexboxgrid-vue

# or yarn
$ yarn add flexboxgrid-vue
```

### Configuration
To add Flexboxgrid Vue to your project, you can do the following:
```javascript
import Vue from 'vue';
import FlexboxgridVue from '@vivid-web/flexboxgrid-vue';

Vue.use(FlexboxgridVue);
```

This will give you access to the _global_ registered Flexboxgrid components. Now you can create a
Vue component like this:
```vue
<script>
export default {
  /**
   * The name of the component. 
   */
  name: 'MyAwesomeComponent',
}
</script>

<template>
  <VGrid variant="container">
    <VRow>
      <VCol variant="md-6">I take up half of the space</VCol>
      <VCol variant="md-6">Me too!</VCol>
    </VRow>
  </VGrid>
</template>
```

See that this way you don't have to import anything in your Vue component. Like stated before, the
components necessary for the Flexboxgrid are attached to the global Vue instance. This way they
are always loaded in every Vue component. If you don't like this approach, you can do the
following:
```vue
<script>
import { VGrid, VRow, VCol } from '@vivid-web/flexboxgrid-vue';

export default {
  /**
   * The name of the component. 
   */
  name: 'MyAwesomeComponent',
}
</script>

<template>
  <VGrid variant="container">
    <VRow>
      <VCol variant="md-6">I take up half of the space</VCol>
      <VCol variant="md-6">Me too!</VCol>
    </VRow>
  </VGrid>
</template>
```
>Now, don't forget to remove the use statement!

## Components
The flexboxgrid comes with four components, discussed below. As a rule of thumb, you can specify
the breakpoint for a VRow, VCol en VText. When referencing `$breakpoints`, you can use one or
multiple of the following breakpoints:
 - `xs` - Extra small breakpoint
 - `sm` - Small breakpoint
 - `md` - Medium breakpoint
 - `lg` - Large breakpoint
 - `xl` - Extra large breakpoint

This grid is based on the twelve column grid. So you can combine the breakpoint with a column size
to make the website responsive, creating breakpoints lik `md-6` or `xl-2`. The columns that you can
use are `0..12`.

The breakpoints and the column size can be passed as `variant` or `variants` property. Each of the
components takes a couple of property that are available.

| Name       | Type          | Required | Description                                             |
| -----------| :-----------: | :------: | :------------------------------------------------------ |
| `variant`  | String        | `false`  | Each component can have a variant. This is used for the |
|            |               |          | BEM styling. Underwater a `VCol` with a variant of      |
|            |               |          | `md-6` will result to `v-col--md-6`.                    |
| `variants` | Array         | `false`  | Each component can have an array of variants. This does |
|            |               |          | the same as `variant`, but will apply an array instead  |
|            |               |          | of a single string.                                     |
| `content`  | String|Number | `false`  | If no slot is given, you can pass the content as a      |
|            |               |          | property.                                               |

### VGrid
This is the container for the whole rows and columns.

#### Variants
The grid has the following variants:
 - `container`
 Will create a boxed container with a max-width of 1200px.
 - `no-gutters`
 Will create a container with no gutters.
 - `[$breakpoints]-no-gutters`
Will create a grid with no gutters. Can also be used without a breakpoint.

### VRow
Will take up the whole width of a container.

#### Variants
The row has the following variants:
 - `[$breakpoints]`
The breakpoints for the row. For example, `xs` will result in a row like this `row--xs`.
 - `[$breakpoints]-[0..12]`
The breakpoints for the row. For example, `xs-6` will result in a row like this `row--xs-6`.
 - `[$breakpoints]-no-gutters`
Will create a row with no gutters. Can also be used without a breakpoint.
 - `[$breakpoints]-top`
Will align the row at the top. Can also be used without a breakpoint.
 - `[$breakpoints]-center`
Will align the row at the center. Can also be used without a breakpoint.
 - `[$breakpoints]-bottom`
Will align the row at the bottom. Can also be used without a breakpoint.
 - `[$breakpoints]-reverse`
Will reverse the content of the row. Can also be used without a breakpoint.

### VCol
A column is the most important part of the grid.

#### Variants
The col has the following variants:
 - `[$breakpoints]`
The breakpoints for the col. For example, `xs` will result in a col like this `col--xs`.
 - `[$breakpoints]-[0..12]`
The breakpoints for the col. For example, `xs-6` will result in a col like this `col--xs-6`.
 - `[$breakpoints]-no-gutters`
Will create a col with no gutters. Can also be used without a breakpoint.
 - `[$breakpoints]-align-top`
Align the column at the top. Can also be used without a breakpoint.
 - `[$breakpoints]-align-center`
Align the column at the center. Can also be used without a breakpoint.
 - `[$breakpoints]-align-bottom`
Align the column at the bottom. Can also be used without a breakpoint.
 - `[$breakpoints]-first`
Push the column to the first place. Can also be used without a breakpoint.
 - `[$breakpoints]-last`
Push the column to the last place. Can also be used without a breakpoint.
 - `[$breakpoints]-reset`
Reset the order of the column. Can also be used without a breakpoint.
 - `[$breakpoints]-flex`
Make the column flexible. Can also be used without a breakpoint.

### VText
A text component holds the text.

#### Variants
The text has the following variants:
 - `[$breakpoints]-right`
Align the text to the right. Can also be used without a breakpoint.
 - `[$breakpoints]-left`
Align the text to the left. Can also be used without a breakpoint.
 - `[$breakpoints]-center`
Align the text to the center. Can also be used without a breakpoint.

## Authors ##
 - [Peter van Meijgaard](https://github.com/petervmeijgaard)

## More Information ##
 -  [Documentation](http://flexboxgrid.vivid-websolutions.nl)

## License ##
The MIT License (MIT)

Copyright (c) 2015 - 2018 Vivid Websolutions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
