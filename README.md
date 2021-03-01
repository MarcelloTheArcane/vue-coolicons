![coolicons by Kryston Schwarze](https://github.com/marcellothearcane/vue-coolicons/blob/master/coolicons-feature-card.png?raw=true)

# vue-coolicons

This is a fork of [coolicons](https://github.com/krystonschwarze/coolicons/) by Kryston Schwartze, with the SVGs turned into Vue components.

## Usage

```
yarn add vue-coolicons
```

```vue
<template>
  <coolicons-icon />
</template>

<script>
import { CooliconsIcon } from 'vue-coolicons'

export default {
  components: {
    CooliconsIcon,
  },
}
</script>
```

The icon names are pascal-cased, with 'Icon' appended.  There is a `.d.ts` file to help with Intellisense autocomplete.

### License
You can use coolicons for your personal and commercial projects. The icons are free to download and are licensed under CC 4.0 . By downloading it is assumed that you agree with the terms mentioned in CC 4.0.