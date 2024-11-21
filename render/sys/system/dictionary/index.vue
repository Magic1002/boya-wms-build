<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane v-for="item in tabs" :key="item.path" :label="item.name" :name="item.path">
      <dict-item :key="item.path" :path="item.path" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import DictItem from './Item'

export default {
  name: 'SystemDictionary',
  components: {
    DictItem
  },
  data() {
    return {
      activeName: 'sys',
      /* eslint-disable */
      tabs: <%- JSON.stringify(sys.dictionaryTabs) %>
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
