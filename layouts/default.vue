<template>
  <v-app>

    <v-app-bar
      color="green accent-4" dark
      fixed
      app
    >
      ヘッダー
      <nuxt-link to="/" class="mr-2">
        Top
      </nuxt-link>

      <nuxt-link to="/other" >
        Other
      </nuxt-link>

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
  }
}
</script>
