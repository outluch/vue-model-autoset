# vue-model-autoset

A [Vue.js](http://vuejs.org) plugin to workaround Vue limitation in observing dynamically added properties with v-model directive.

Imagine a huge form with 100+ fields.

```html
<input v-model="filters.name" />
<my-slider v-model="filters.price_min" />
<my-slider v-model="filters.price_max" />
.......
100+
.......
<my-checkbox v-model="filters.only_good_offers" />
```

You should init `filters` in `data()` fn for your parent component, if you want them be reactive, like this:
```js
data() {
  return {
    filters: {
      name: null,
      price_min: null,
      price_max: null,
      ...
      ...
      only_good_offers: null
    }
  }
}
```

And now you should keep them in sync, or you wil get weird bugs.
It is frustrating.
vue-model-autoset does it for you. Define your `filters: {}` and forget.
Just write your template and it will just work.

## Installation

##### 1.) Install package via NPM

```
$ npm install vue-model-autoset
```

##### 2.) Install plugin within project.
```js
import Vue from 'vue';
import VueModelAutoset from 'vue-model-autoset';

Vue.use(VueModelAutoset)
```

or

include `dist/index.js` with `<script />` tag after Vue.

## Usage

See demo/index.html

## Notes

I dont think it is very good idea to keep webpack in dependencies to just include lodash/get. Maybe there some better and more lightweight way to do that? I would be glad to know.

## License

[MIT](http://opensource.org/licenses/MIT)
