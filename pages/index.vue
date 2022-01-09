<template>
  <v-row class="text-center" justify="center" align="center">
    <v-col cols="12">
      トップページ
      <font-awesome-icon icon="download"/>
      <font-awesome-icon icon="anchor"/>
      <font-awesome-icon icon="star"/>
      <font-awesome-icon :icon="['far', 'star']"  />
      <font-awesome-icon :icon="['fas', 'star']"  />
      <font-awesome-icon :icon="['fab', 'twitter']"  />
      <font-awesome-icon :icon="['far', 'star']"  />
      <font-awesome-icon :icon="['fas', 'download']"  />
    </v-col>
    <v-col cols="12">
      <Test></Test>
    </v-col>
    <v-col cols="12">
      <div v-for="work in works" :key="work.sys.id">
        <h3>{{ work.fields.title }}</h3>
        <!-- <h4>{{ work.fields.content.content }}</h4> -->
        <div
          class=""
          v-html="toHtmlString(work.fields.content)"
        ></div>
        <v-img
          class="mx-auto"
          max-height="300"
          max-width="600"
          :src="work.fields.image.fields.file.url"
        ></v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  name: 'index',
  asyncData() {
    return Promise.all([
      client.getEntries({
        'content_type': 'work',
        order: '-sys.createdAt'
      })
    ]).then(([works]) => {
      return {
        works: works.items
      }
    }).catch(console.error)
  },
  methods: {
    toHtmlString(obj) {
      const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({
            data: {
              target: { fields }
            }
          }) => `<img src="${fields.file.url}" style="max-width:300px" />`
        }
      }
      return documentToHtmlString(obj, options)
    }
  }
}
</script>
