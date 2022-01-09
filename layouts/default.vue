<template>
  <v-app>

    <v-app-bar
      id="top"
      color="green accent-4" dark
      fixed
      app
    >
      ヘッダー
      <nuxt-link to="/" class="mr-2">
        Top
      </nuxt-link>

      <nuxt-link to="/other" class="mr-2">
        Other
      </nuxt-link>

      <nuxt-link v-scroll-to="'#target'" to class="mr-2">targetの位置へ</nuxt-link>

      <v-btn
        color="error"
        @click="onScroll"
      >
        target-method
      </v-btn>



    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      color="green accent-4" dark
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <span>フッター</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'default',
  data () {
    return {
    }
  },
  methods: {
    onScroll() {
      this.$scrollTo('#target')
    }
  },
  mounted () {
    const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash)
    }
  }
}
</script>
