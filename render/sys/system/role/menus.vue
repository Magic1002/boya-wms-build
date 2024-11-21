<template>
  <el-tabs tab-position="left">
    <el-tab-pane v-for="item in tabs" :key="item.value" :label="item.label">
      <el-row>
        <menu-item :key="item.value" :loading="loading" :item="item" :menu="item.menus" :ref-name="item.value" :choosed-item-info="choosedItemInfo" @updataMenus="updataMenus" />
      </el-row>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import MenuItem from './menuItem'
import { getMenuListApi } from '@/apis/modules/System/menu'

export default {
  components: {
    MenuItem
  },
  props: {
    menusCheckedList: {
      type: Object,
      default: () => {
        return { sys: [], mes: [], lms: [], qhmes: [], sale: [], wms: [] }
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    choosedItemInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      /* eslint-disable */
      tabs: <%- JSON.stringify(sys.roleTabs) %>
    }
  },
  watch: {
    menusCheckedList: {
      handler: function(val) {
        if (!val.sys) return
        const { sys, mes, lms, qhmes, sale, wms } = val
        this.tabs = this.tabs.map((item, key) => {
          return { ...item, sys, mes, lms, qhmes, sale, wms }
          // this.$set(this.tabs, key, { ...item, sys, mes })
        })
        console.log(this.tabs, 'ppptabw')
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.tabs.forEach(item => {
      this.initMenus(item.path, item.value)
    })
  },
  methods: {
    initMenus(path, name) {
      return new Promise((resolve, reject) => {
        console.log('====>', path, name)
        getMenuListApi(path, {}).then(res => {
          const { code, data } = res
          if (!code) {
            this.tabs = this.tabs.map(item => {
              if (item.value === name) {
                return {
                  ...item,
                  menus: data
                }
              } else {
                return {
                  ...item
                }
              }
            })
          }
        })
      })
    },
    updataMenus() {
      this.$emit('updataMenus')
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
