import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  newerPage: null,
  olderPage: null,
  term: '',
  /** @type {import('./models/Account.js').Account | null} */
  activeProfile: null,
  /** @type {import('./models/Jad.js').Jad[]} */
  jads: []


})
