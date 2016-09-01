const BASE_DOMAIN = 'http://test.bao.wallstreetcn.com:3000'
const CAPTURE_DOMAIN = 'http://121.41.77.236:8080'

const apiAddress = {
  topic: {
    list: BASE_DOMAIN + '/api/admin/subjects/list',
    search: BASE_DOMAIN + '/api/admin/search/subject',
    single: BASE_DOMAIN + '/api/admin/subjects/',
    add: BASE_DOMAIN + '/api/admin/subjects',
  },
  tag: {
    list: BASE_DOMAIN + '/api/admin/tags/list',
    single: BASE_DOMAIN + '/api/admin/tags/',
    add: BASE_DOMAIN + '/api/admin/tags',
    search: BASE_DOMAIN + '/api/admin/search/tag',
    relateTopic: BASE_DOMAIN + '/api/admin/tags/',
  },
  article: {
    list: BASE_DOMAIN + '/api/admin/messages/list',
    add: BASE_DOMAIN + '/api/admin/messages',
    single: BASE_DOMAIN + '/api/admin/messages/',
    search: BASE_DOMAIN + '/api/admin/search/message',
    top: BASE_DOMAIN + '/api/admin/messages/subject_status/',
    featureList: BASE_DOMAIN + '/api/admin/messages/featureList',
  },
  hs: {
    token: 'http://api.wallstreetcn.com/v2/itn/token/public',
  },
  qn: {
    token: BASE_DOMAIN + '/api/admin/file/upload_token?reuse=true',
    domain: 'https://baoimage.wallstreetcn.com/',
    upload: 'http://upload.qiniu.com/',
    fetchToken: BASE_DOMAIN + '/api/admin/file/fetch_token'
  },
  stock: {
    search: BASE_DOMAIN + '/api/search/stock',
  },
  user: {
    login: BASE_DOMAIN + '/api/account/mobile_login',
  },
  draft: {
    add: BASE_DOMAIN + '/api/admin/drafts',
    list: BASE_DOMAIN + '/api/admin/drafts/list',
    single: BASE_DOMAIN + '/api/admin/drafts/',
    search: BASE_DOMAIN + '/api/admin/search/draft',
  },
  homePageRec: {
    add: BASE_DOMAIN + '/api/admin/settings',
    list: BASE_DOMAIN + '/api/admin/settings',
  },
  androidVersion: {
    fetch: BASE_DOMAIN + '/api/admin/settings/android_version',
    post: BASE_DOMAIN + '/api/admin/settings/android_version'
  },
  sector: {
    add: BASE_DOMAIN + '/api/admin/sset',
    single: BASE_DOMAIN + '/api/admin/sset/',
    list: BASE_DOMAIN + '/api/admin/sset/list',
    search: BASE_DOMAIN + '/api/admin/search/sset',
    range: BASE_DOMAIN + '/q/quote/v1/real',
    history: BASE_DOMAIN + '/q/quote/v1/daily-data',
    search: BASE_DOMAIN + '/api/stocks/ssets'
  },
  capture: {
    sourceList: CAPTURE_DOMAIN + '/sources/list',
    single: CAPTURE_DOMAIN + '/sources',
    search: CAPTURE_DOMAIN + '/sources/search',
    tagList: CAPTURE_DOMAIN + '/tags/list',
    tag: CAPTURE_DOMAIN + '/tags',
    article: CAPTURE_DOMAIN + '/articles',
    articleWait: CAPTURE_DOMAIN + '/articles/wait',
    articleSearch: CAPTURE_DOMAIN + '/articles/search',
    articleList: CAPTURE_DOMAIN + '/articles/list',
    add: CAPTURE_DOMAIN + '/articles/publish/'
  },
  splash: {
    list: BASE_DOMAIN + '/api/admin/splash/list',
    single: BASE_DOMAIN + '/api/admin/splashes/',
    post: BASE_DOMAIN + '/api/admin/splash',
    channel: BASE_DOMAIN + '/api/admin/channels/list?page=1&limit=30'
  }
}

export default apiAddress