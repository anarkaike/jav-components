import { boot } from 'quasar/wrappers'

// https://icon-sets.iconify.design/
import { Icon } from '@iconify/vue'

export default boot(({ app }) => {
  app.component('Icon', Icon)
})
