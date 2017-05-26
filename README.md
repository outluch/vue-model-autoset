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

You should init `filters` in `data()` fn for your parent component, if you want them be reactive
[Vue.js Change-Detection-Caveats](https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats)

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

And now you need to keep them in sync, or you will get weird bugs.
It is frustrating.
vue-model-autoset does this for you. Define your `filters: {}` and forget.
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

## Notes

Killed webpack etc, so this package now can be used only in webpack projects. No simple include script usage.

## Contribution

I appreciate any comments, feedback, and information about potential issues. Have you experienced a bug or noticed a mistake in documentation? Please add a new issue. Thanks!

## License

[MIT](http://opensource.org/licenses/MIT)
