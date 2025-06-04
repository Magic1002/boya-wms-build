const templateInfo = {
  WMSHYCloud: {
    customer: '精益生产物料管理系统--WMS管理系统',
    title: '精益生产物料管理系统', // 登录页表单标题
    VUE_APP_BASE_API: 'http://10.75.25.79:8991',
    VUE_APP_BASE_API_WMS: 'http://10.75.25.79:8990',
    VUE_APP_BASE_API_ACTIVITI: 'http://10.75.25.79:8992',
    buildFilesList: ['board', 'sys', 'wms'],
    board: {
      boardList: [
        {
          id: 0,
          enName: 'SYS',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sys',
          color: '#c8b636',
          show: true
        },
        {
          id: 15,
          enName: 'WMS',
          name: '精益生产物料管理系统',
          icon: 'wms',
          path: 'wms',
          color: '#AA5FF5',
          show: true
        }
      ],
      boardLoginTitle: `
        <el-row class="title-wrapper">
          <h4 class="title">精益生产物料管理系统</h4>
          <h4 class="title">WMS管理系统</h4>
        </el-row>
        `,
      boardLoginForm: {
        username: '',
        password: ''
      },
      boardLoginStyle: `
        .title-wrapper{
          margin: 0px auto 40px auto;
        }`
    },
    sys: {
      menuTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], wms: [] },
        { path: 'wms', label: 'WMS', value: 'wms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], wms: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ]
    }
  },
  WMSHYTest: {
    customer: '精益生产物料管理系统--WMS管理系统',
    title: '精益生产物料管理系统', // 登录页表单标题
    VUE_APP_BASE_API: 'http://192.168.1.4:8991',
    VUE_APP_BASE_API_WMS: 'http://192.168.1.4:8990',
    VUE_APP_BASE_API_ACTIVITI: 'http://192.168.1.4:8992',
    buildFilesList: ['board', 'sys', 'wms'],
    board: {
      boardList: [
        {
          id: 0,
          enName: 'SYS',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sys',
          color: '#c8b636',
          show: true
        },
        {
          id: 15,
          enName: 'WMS',
          name: '精益生产物料管理系统',
          icon: 'wms',
          path: 'wms',
          color: '#AA5FF5',
          show: true
        }
      ],
      boardLoginTitle: `
        <el-row class="title-wrapper">
          <h4 class="title">精益生产物料管理系统</h4>
          <h4 class="title">WMS管理系统</h4>
        </el-row>
        `,
      boardLoginForm: {
        username: '',
        password: ''
      },
      boardLoginStyle: `
        .title-wrapper{
          margin: 0px auto 40px auto;
        }`
    },
    sys: {
      menuTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], wms: [] },
        { path: 'wms', label: 'WMS', value: 'wms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], wms: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ]
    }
  },
  WMSdev: {
    customer: '精益生产物料管理系统--WMS管理系统',
    title: '精益生产物料管理系统', // 登录页表单标题
    VUE_APP_BASE_API: 'http://192.168.1.7:18990',
    VUE_APP_BASE_API_WMS: 'http://192.168.1.7:8990',
    VUE_APP_BASE_API_ACTIVITI: 'http://192.168.1.7:8991',
    buildFilesList: ['board', 'sys', 'wms'],
    board: {
      boardList: [
        {
          id: 0,
          enName: 'SYS',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sys',
          color: '#c8b636',
          show: true
        },
        {
          id: 15,
          enName: 'WMS',
          name: '精益生产物料管理系统',
          icon: 'wms',
          path: 'wms',
          color: '#AA5FF5',
          show: true
        }
      ],
      boardLoginTitle: `
        <el-row class="title-wrapper">
          <h4 class="title">精益生产物料管理系统</h4>
          <h4 class="title">WMS管理系统</h4>
        </el-row>
        `,
      boardLoginForm: {
        username: '',
        password: ''
      },
      boardLoginStyle: `
        .title-wrapper{
          margin: 0px auto 40px auto;
        }`
    },
    sys: {
      menuTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], wms: [] },
        { path: 'wms', label: 'WMS', value: 'wms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], wms: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ]
    }
  },
  WMSdevSecure: {
    customer: '精益生产物料管理系统--WMS管理系统',
    title: '精益生产物料管理系统', // 登录页表单标题
    VUE_APP_BASE_API: 'https://192.168.1.5:9005/api/system',
    VUE_APP_BASE_API_WMS: 'https://192.168.1.5:9005/api/wms',
    VUE_APP_BASE_API_ACTIVITI: 'https://192.168.1.5:9005/api/flowable',
    buildFilesList: ['board', 'sys', 'wms'],
    board: {
      boardList: [
        {
          id: 0,
          enName: 'SYS',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sys',
          color: '#c8b636',
          show: true
        },
        {
          id: 15,
          enName: 'WMS',
          name: '精益生产物料管理系统',
          icon: 'wms',
          path: 'wms',
          color: '#AA5FF5',
          show: true
        }
      ],
      boardLoginTitle: `
        <el-row class="title-wrapper">
          <h4 class="title">精益生产物料管理系统</h4>
          <h4 class="title">WMS管理系统</h4>
        </el-row>
        `,
      boardLoginForm: {
        username: '',
        password: ''
      },
      boardLoginStyle: `
        .title-wrapper{
          margin: 0px auto 40px auto;
        }`
    },
    sys: {
      menuTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], wms: [] },
        { path: 'wms', label: 'WMS', value: 'wms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], wms: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ]
    }
  },
  WMSdevIntranet: {
    customer: '精益生产物料管理系统--WMS管理系统',
    title: '精益生产物料管理系统', // 登录页表单标题
    VUE_APP_BASE_API: 'https://intranet.byimt.com/api/system',
    VUE_APP_BASE_API_WMS: 'https://intranet.byimt.com/api/wms',
    VUE_APP_BASE_API_ACTIVITI: 'https://intranet.byimt.com/api/flowable',
    buildFilesList: ['board', 'sys', 'wms'],
    board: {
      boardList: [
        {
          id: 0,
          enName: 'SYS',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sys',
          color: '#c8b636',
          show: true
        },
        {
          id: 15,
          enName: 'WMS',
          name: '精益生产物料管理系统',
          icon: 'wms',
          path: 'wms',
          color: '#AA5FF5',
          show: true
        }
      ],
      boardLoginTitle: `
        <el-row class="title-wrapper">
          <h4 class="title">精益生产物料管理系统</h4>
          <h4 class="title">WMS管理系统</h4>
        </el-row>
        `,
      boardLoginForm: {
        username: '',
        password: ''
      },
      boardLoginStyle: `
        .title-wrapper{
          margin: 0px auto 40px auto;
        }`
    },
    sys: {
      menuTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], wms: [] },
        { path: 'wms', label: 'WMS', value: 'wms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], wms: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WMS', path: 'wms' }
      ]
    }
  }
}

module.exports = templateInfo
