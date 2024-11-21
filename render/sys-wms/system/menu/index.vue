<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane v-for="item in tabs" :key="item.path" :label="item.name" :name="item.path">
      <menu-item :key="item.path" :path="item.path" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import MenuItem from './Item'
export default {
  name: 'SystemMenu',
  components: {
    MenuItem
  },
  data() {
    return {
      activeName: 'sys',
      /* eslint-disable */
      tabs: <%- JSON.stringify(sys.menuTabs) %>
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
