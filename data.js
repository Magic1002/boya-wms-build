const templateInfo = {
  // 陕西特种车辆（特车）
  TC: {
    customer: '陕西特种车辆（特车）--销售管理系统',
    title: '销售管理系统',
    VUE_APP_BASE_API: 'http://10.134.129.122:8989',
    VUE_APP_BASE_API_MES: 'http://10.134.129.122:8989',
    VUE_APP_BASE_API_SALE: 'http://10.134.129.122:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://10.134.129.122:8989',
    buildFilesList: ['board', 'sys', 'sale'],
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
          id: 2,
          enName: 'SALE',
          name: '销售管理系统',
          icon: 'sale',
          path: 'sale',
          color: '#7e1ad1',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h3 class="title">宝石机械</h3>
        <h4 class="title">宝鸡宝石特种车辆有限责任公司</h4>
        <h4 class="title">销售管理系统</h4>
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
        { name: '销售管理', path: 'sale' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'sale', label: '销售管理', value: 'sale', menus: [], sys: [], mes: [], lms: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '销售管理', path: 'sale' }
      ]
    }
  },
  // 销售系统的测试环境
  TCdev: {
    customer: '陕西特种车辆（特车）--销售管理系统',
    title: '销售管理系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:38989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8988',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8986',
    VUE_APP_BASE_API_QHMES: 'http://8.130.16.201:8983',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8987',
    buildFilesList: ['board', 'sys', 'sale'],
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
          id: 2,
          enName: 'SALE',
          name: '销售管理系统',
          icon: 'sale',
          path: 'sale',
          color: '#7e1ad1',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h3 class="title">宝石机械</h3>
        <h4 class="title">宝鸡宝石特种车辆有限责任公司</h4>
        <h4 class="title">销售管理系统（测试环境）</h4>
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
        { name: '销售管理', path: 'sale' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'sale', label: '销售管理', value: 'sale', menus: [], sys: [], mes: [], lms: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '销售管理', path: 'sale' }
      ]
    }
  },
  // 庆华
  QH: {
    customer: '陕西庆华汽车安全系统有限责任公司--MES管理系统',
    title: 'MES管理系统',
    VUE_APP_BASE_API: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_MES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_SALE: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_QHMES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://192.168.25.35:8989',
    buildFilesList: ['board', 'sys', 'qhmes'],
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
          id: 13,
          enName: 'QH-MES',
          name: '庆华-制造执行系统',
          icon: 'mes',
          path: 'qhmes',
          color: '#F56C6C',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">陕西庆华汽车安全系统有限责任公司</h4>
        <h4 class="title">MES管理系统</h4>
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
        { name: '庆华MES', path: 'qhmes' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'qhmes', label: '庆华MES', value: 'qhmes', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '庆华MES', path: 'qhmes' }
      ],
      RESET_PW: 'admin123'
    }
  },
  // 庆华经开
  QHJK: {
    customer: '陕西庆华汽车安全系统有限责任公司--MES管理系统',
    title: 'MES管理系统',
    VUE_APP_BASE_API: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_MES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_SALE: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_QHMES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://192.168.25.35:8989',
    buildFilesList: ['board', 'sys', 'qhmes'],
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
          id: 13,
          enName: 'QH-MES',
          name: '庆华-制造执行系统',
          icon: 'mes',
          path: 'qhmes',
          color: '#F56C6C',
          show: true
        }
      ],
      boardLoginTitle: `
        <el-row class="title-wrapper">
          <h4 class="title">陕西庆华汽车安全系统有限责任公司</h4>
          <h4 class="title">MES管理系统</h4>
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
        { name: '庆华MES', path: 'qhmes' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'qhmes', label: '庆华MES', value: 'qhmes', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '庆华MES', path: 'qhmes' }
      ],
      RESET_PW: 'admin123'
    }
  },
  // 庆华经开外网
  QHJKOut: {
    customer: '陕西庆华汽车安全系统有限责任公司--MES管理系统（外网）',
    title: 'MES管理系统',
    VUE_APP_BASE_API: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_MES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_SALE: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_QHMES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://192.168.25.35:8989',
    buildFilesList: ['board', 'sys', 'qhmes'],
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
          id: 13,
          enName: 'QH-MES',
          name: '庆华-制造执行系统',
          icon: 'mes',
          path: 'qhmes',
          color: '#F56C6C',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">陕西庆华汽车安全系统有限责任公司</h4>
        <h4 class="title">MES管理系统</h4>
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
        { name: '庆华MES', path: 'qhmes' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'qhmes', label: '庆华MES', value: 'qhmes', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '庆华MES', path: 'qhmes' }
      ]
    },
    RESET_PW: 'admin123'
  },
  // 庆华总部
  QHZB: {
    customer: '陕西庆华汽车安全系统有限责任公司--MES管理系统',
    title: 'MES管理系统',
    VUE_APP_BASE_API: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_MES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_SALE: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_QHMES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://192.168.25.35:8989',
    buildFilesList: ['board', 'sys', 'qhmes'],
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
          id: 13,
          enName: 'QH-MES',
          name: '庆华-制造执行系统',
          icon: 'mes',
          path: 'qhmes',
          color: '#F56C6C',
          show: true
        }
      ],
      boardLoginTitle: `
        <el-row class="title-wrapper">
          <h4 class="title">陕西庆华汽车安全系统有限责任公司</h4>
          <h4 class="title">MES管理系统</h4>
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
        { name: '庆华MES', path: 'qhmes' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'qhmes', label: '庆华MES', value: 'qhmes', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '庆华MES', path: 'qhmes' }
      ],
      RESET_PW: 'admin123'
    }
  },
  // 庆华总部外网
  QHZBOut: {
    customer: '陕西庆华汽车安全系统有限责任公司--MES管理系统（外网）',
    title: 'MES管理系统',
    VUE_APP_BASE_API: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_MES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_SALE: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_QHMES: 'http://192.168.25.35:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://192.168.25.35:8989',
    buildFilesList: ['board', 'sys', 'qhmes'],
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
          id: 13,
          enName: 'QH-MES',
          name: '庆华-制造执行系统',
          icon: 'mes',
          path: 'qhmes',
          color: '#F56C6C',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">陕西庆华汽车安全系统有限责任公司</h4>
        <h4 class="title">MES管理系统</h4>
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
        { name: '庆华MES', path: 'qhmes' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'qhmes', label: '庆华MES', value: 'qhmes', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '庆华MES', path: 'qhmes' }
      ],
      RESET_PW: 'admin123'
    }
  },
  // 庆华测试环境
  QHdev: {
    customer: '陕西庆华汽车安全系统有限责任公司--MES管理系统（测试环境）',
    title: 'MES管理系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:28989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8988',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8986',
    VUE_APP_BASE_API_QHMES: 'http://8.130.16.201:8983',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8987',
    buildFilesList: ['board', 'sys', 'qhmes'],
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
          id: 13,
          enName: 'QH-MES',
          name: '庆华-制造执行系统',
          icon: 'mes',
          path: 'qhmes',
          color: '#F56C6C',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">陕西庆华汽车安全系统有限责任公司</h4>
        <h4 class="title">MES管理系统（测试环境）</h4>
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
        { name: '庆华MES', path: 'qhmes' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'qhmes', label: '庆华MES', value: 'qhmes', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '庆华MES', path: 'qhmes' }
      ],
      RESET_PW: 'admin123'
    }
  },
  // 海油云
  HYCloud: {
    customer: 'LMS管理系统',
    title: '管理系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_LMS: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8989',
    buildFilesList: ['board', 'sys', 'lms'],
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
          id: 12,
          enName: 'LMS',
          name: '制造执行系统',
          icon: 'mes',
          path: 'lms',
          color: '#5CB87A',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title"></h4>
        <h4 class="title">管理系统</h4>
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
        { name: 'LMS', path: 'lms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'lms', label: 'LMS', value: 'lms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'LMS', path: 'lms' }
      ],
      RESET_PW: 'September@219'
    }
  },
  // 海油云2
  HYCloud2: {
    customer: 'LMS管理系统',
    title: '管理系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_LMS: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8989',
    buildFilesList: ['board', 'sys', 'lms'],
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
          id: 12,
          enName: 'LMS',
          name: '制造执行系统',
          icon: 'mes',
          path: 'lms',
          color: '#5CB87A',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title"></h4>
        <h4 class="title">管理系统</h4>
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
        { name: 'LMS', path: 'lms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'lms', label: 'LMS', value: 'lms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'LMS', path: 'lms' }
      ],
      RESET_PW: 'September@219'
    }
  },
  // 海油本地
  HY: {
    customer: 'LMS管理系统',
    title: '管理系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_LMS: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8989',
    buildFilesList: ['board', 'sys', 'lms'],
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
          id: 12,
          enName: 'LMS',
          name: '制造执行系统',
          icon: 'mes',
          path: 'lms',
          color: '#5CB87A',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title"></h4>
        <h4 class="title">管理系统</h4>
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
        { name: 'LMS', path: 'lms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'lms', label: 'LMS', value: 'lms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'LMS', path: 'lms' }
      ],
      RESET_PW: 'September@219'
    }
  },
  // 海油 201 测试服务器
  HYdev: {
    customer: 'LMS管理系统',
    title: '管理系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:18989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_LMS: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8989',
    buildFilesList: ['board', 'sys', 'lms'],
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
          id: 12,
          enName: 'LMS',
          name: '制造执行系统',
          icon: 'mes',
          path: 'lms',
          color: '#5CB87A',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title"></h4>
        <h4 class="title">管理系统</h4>
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
        { name: 'LMS', path: 'lms' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
        { path: 'lms', label: 'LMS', value: 'lms', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'LMS', path: 'lms' }
      ],
      RESET_PW: 'September@219'
    }
  },
  EMOS: {
    customer: '装备作业及运维管理系统',
    title: 'EMOS系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_LMS: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8989',
    buildFilesList: ['board', 'sys-i18n', 'emos'],
    board: {
      boardList: [
        {
          id: 100,
          enName: 'SYS-I18n',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sysI18n',
          color: '#c8b636',
          show: true
        },
        {
          id: 14,
          enName: 'EMOS',
          name: '装备作业运维',
          icon: 'emos',
          path: 'emos',
          color: '#40adf7',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">EMOS</h4>
        <h4 class="title">装备作业及运维管理系统</h4>
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
        { name: 'EMOS', path: 'emos' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], emos: [] },
        { path: 'emos', label: 'EMOS', value: 'emos', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], emos: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'EMOS', path: 'emos' }
      ]
    }
  },
  EMOSdev: {
    customer: '装备作业及运维管理系统',
    title: 'EMOS系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:48989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_LMS: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_EMOS: 'http://8.130.16.201:8982',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8989',
    buildFilesList: ['board', 'sys-i18n', 'emos'],
    board: {
      boardList: [
        {
          id: 100,
          enName: 'SYS-I18n',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sysI18n',
          color: '#c8b636',
          show: true
        },
        {
          id: 14,
          enName: 'EMOS',
          name: '装备作业运维',
          icon: 'emos',
          path: 'emos',
          color: '#40adf7',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">EMOS</h4>
        <h4 class="title">装备作业及运维管理系统</h4>
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
        { name: 'EMOS', path: 'emos' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], emos: [] },
        { path: 'emos', label: 'EMOS', value: 'emos', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], emos: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'EMOS', path: 'emos' }
      ]
    }
  },
  EMOSCloud: {
    customer: '装备作业及运维管理系统',
    title: '装备作业及运维管理系统',
    VUE_APP_BASE_API: 'http://10.75.25.79:8086',
    VUE_APP_BASE_API_MES: 'http://10.75.25.79:8989',
    VUE_APP_BASE_API_SALE: 'http://10.75.25.79:8989',
    VUE_APP_BASE_API_LMS: 'http://10.75.25.79:8989',
    VUE_APP_BASE_API_EMOS: 'http://10.75.25.79:8982',
    VUE_APP_BASE_API_ACTIVITI: 'http://10.75.25.79:8987',
    buildFilesList: ['board', 'sys-i18n', 'emos'],
    board: {
      boardList: [
        {
          id: 100,
          enName: 'SYS-I18n',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sysI18n',
          color: '#c8b636',
          show: true
        },
        {
          id: 14,
          enName: 'EMOS',
          name: '装备作业运维',
          icon: 'emos',
          path: 'emos',
          color: '#40adf7',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">EMOS</h4>
        <h4 class="title">装备作业及运维管理系统</h4>
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
        { name: '装备作业运维', path: 'emos' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], emos: [] },
        { path: 'emos', label: '装备作业运维', value: 'emos', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], emos: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: '装备作业运维', path: 'emos' }
      ]
    }
  },
  EMOSTEST: {
    customer: '装备作业及运维管理系统',
    title: 'XX系统',
    VUE_APP_BASE_API: 'http://8.130.16.201:48989',
    VUE_APP_BASE_API_MES: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_SALE: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_LMS: 'http://8.130.16.201:8989',
    VUE_APP_BASE_API_EMOS: 'http://8.130.16.201:8982',
    VUE_APP_BASE_API_ACTIVITI: 'http://8.130.16.201:8989',
    buildFilesList: ['board', 'sys-i18n', 'emos'],
    board: {
      boardList: [
        {
          id: 100,
          enName: 'SYS-I18n',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sysI18n',
          color: '#c8b636',
          show: true
        },
        {
          id: 14,
          enName: 'WEB',
          name: 'XXX',
          icon: 'emos',
          path: 'web',
          color: '#40adf7',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">WEB</h4>
        <h4 class="title">XXX管理系统</h4>
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
        { name: 'WEB', path: 'emos' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], emos: [] },
        { path: 'emos', label: 'WEB', value: 'emos', menus: [], sys: [], emos: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'WEB', path: 'emos' }
      ]
    }
  },
  EMOSLocal: {
    customer: '装备作业及运维管理系统',
    title: '装备作业及运维管理系统',
    VUE_APP_BASE_API: 'http://10.75.25.79:8086',
    VUE_APP_BASE_API_MES: 'http://10.75.25.79:8989',
    VUE_APP_BASE_API_SALE: 'http://10.75.25.79:8989',
    VUE_APP_BASE_API_LMS: 'http://10.75.25.79:8989',
    VUE_APP_BASE_API_EMOS: 'http://10.75.25.79:8982',
    VUE_APP_BASE_API_ACTIVITI: 'http://10.75.25.79:8987',
    buildFilesList: ['board', 'sys-i18n', 'emos'],
    board: {
      boardList: [
        {
          id: 100,
          enName: 'SYS-I18n',
          name: '系统配置中心',
          icon: 'sys',
          path: 'sysI18n',
          color: '#c8b636',
          show: true
        },
        {
          id: 14,
          enName: 'EMOS',
          name: '装备作业运维',
          icon: 'emos',
          path: 'emos',
          color: '#40adf7',
          show: true
        }
      ],
      boardLoginTitle: `
      <el-row class="title-wrapper">
        <h4 class="title">EMOS</h4>
        <h4 class="title">装备作业及运维管理系统</h4>
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
        { name: 'EMOS', path: 'emos' }
      ],
      roleTabs: [
        { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [], emos: [] },
        { path: 'emos', label: 'EMOS', value: 'emos', menus: [], sys: [], mes: [], lms: [], qhmes: [], sale: [], emos: [] }
      ],
      dictionaryTabs: [
        { name: '系统配置', path: 'sys' },
        { name: 'EMOS', path: 'emos' }
      ]
    }
  },
  WMSHYCloud: {
    customer: '精益生产物料管理系统--WMS管理系统',
    title: 'WMS管理系统',
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
  WMSdev: {
    customer: '精益生产物料管理系统--WMS管理系统',
    title: 'WMS管理系统',
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
    title: 'WMS管理系统',
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
    title: 'WMS管理系统',
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

// const templateInfo = {
//   title: '销售管理系统',
//   VUE_APP_BASE_API: 'http://10.134.129.122:8989',
//   VUE_APP_BASE_API_MES: 'http://10.134.129.122:8989',
//   VUE_APP_BASE_API_SALE: 'http://10.134.129.122:8989',
//   VUE_APP_BASE_API_ACTIVITI: 'http://10.134.129.122:8989',
//   board: {
//     boardList: [
//       {
//         id: 0,
//         enName: 'SYS',
//         name: '系统配置中心',
//         icon: 'sys',
//         path: 'sys',
//         color: '#c8b636',
//         show: true
//       },
//       {
//         id: 2,
//         enName: 'SALE',
//         name: '销售管理系统',
//         icon: 'sale',
//         path: 'sale',
//         color: '#7e1ad1',
//         show: true
//       }
//     ],
//     boardLoginTitle: `
//     <el-row class="title-wrapper">
//       <h3 class="title">宝石机械</h3>
//       <h4 class="title">宝鸡宝石特种车辆有限责任公司</h4>
//       <h4 class="title">销售管理系统</h4>
//     </el-row>
//     `,
//     boardLoginForm: {
//       username: '',
//       password: ''
//     },
//     boardLoginStyle: `
//     .title-wrapper{
//       margin: 0px auto 40px auto;
//     }`
//   },
//   sys: {
//     menuTabs: [
//       { name: '系统配置', path: 'sys' },
//       { name: '销售管理', path: 'sale' }
//     ],
//     roleTabs: [
//       { path: 'sys', label: '系统配置', value: 'sys', menus: [], sys: [], mes: [], lms: [], sale: [] },
//       { path: 'sale', label: '销售管理', value: 'sale', menus: [], sys: [], mes: [], lms: [], sale: [] }
//     ],
//     dictionaryTabs: [
//       { name: '系统配置', path: 'sys' },
//       { name: '销售管理', path: 'sale' }
//     ]
//   }
// }

module.exports = templateInfo
