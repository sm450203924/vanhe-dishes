<template>
  <main>

    <!--<homepage-bar></homepage-bar>-->
    <homepage-banner></homepage-banner>
  </main>
</template>

<script>
// @ is an alias to /src

import HomepageBanner from '@/components/homepage/HomepageBanner.vue'
import HomepageBar from '@/components/homepage/HomepageBar.vue'


export default {
  name: 'home',
  components: {
    'homepage-banner': HomepageBanner,
    'homepage-bar': HomepageBar,
  }
}
</script>
