const baseOrigin = process.env.NODE_ENV !== 'development' ? window.location.origin : ''

module.exports = {
  /**
   * @type {string}
   * @description html name
   */
  title: <%- JSON.stringify(title) %>,

  /**
   * @type {string}
   * @description project name
   */
  projectName: 'board',

  /**
   * @type {string}
   * @description now version
   */
  version: 'v0.0.1',

  /**
   * @type {array}
   * @description Whether show the errorLog page
   */
  errorLog: ['development', 'test', 'production'],

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {Object}
   * @description Font baseUrl
   */
  fontBaseUrl: {
    development: {
      board: 'http://127.0.0.1:7902',
      sys: 'http://127.0.0.1:8090',
      sysI18n: 'http://127.0.0.1:9090',
      mes: 'http://127.0.0.1:8091',
      lms: 'http://127.0.0.1:8093',
      qhmes: 'http://127.0.0.1:8094',
      emos: 'http://127.0.0.1:8095',
      wms: 'http://127.0.0.1:8096',
      sale: 'http://127.0.0.1:8092'
    },
    production: {
      board: `${baseOrigin}/board`,
      sys: `${baseOrigin}/sys`,
      sysI18n: `${baseOrigin}/sys-i18n`,
      mes: `${baseOrigin}/mes`,
      lms: `${baseOrigin}/lms`,
      emos: `${baseOrigin}/emos`,
      web: `${baseOrigin}/web`,
      wms: `${baseOrigin}/wms`,
      qhmes: `${baseOrigin}/qhmes`,
      sale: `${baseOrigin}/sale`
    },
    linux: {
      board: `${baseOrigin}/board`,
      sys: `${baseOrigin}/sys`,
      sysI18n: `${baseOrigin}/sys-i18n`,
      mes: `${baseOrigin}/mes`,
      lms: `${baseOrigin}/lms`,
      emos: `${baseOrigin}/emos`,
      web: `${baseOrigin}/web`,
      wms: `${baseOrigin}/wms`,
      qhmes: `${baseOrigin}/qhmes`,
      sale: `${baseOrigin}/sale`
    }
  }
}
