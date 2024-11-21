<template>
  <div class="back-board">
    <navbar />
    <el-card class="container clearfix">
      <div class="board-title">
        <h1>主控面板</h1>
      </div>
      <el-card v-for="item in chunk" :key="item.id" class="chunk fl clearfix" :style="`background:${item.color}`" @click.native="handleOpenChunk(item)">
        <svg-icon :icon-class="item.icon" class="board-icon fl" />
        <div class="board-msg fl">
          <p>{{ item.enName }}</p>
          <p>{{ item.name }}</p>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Settings from '@/settings'
import { setCookie } from '@/utils/auth'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      chunk: <%- JSON.stringify(board.boardList) %>
    }
  },
  methods: {
    handleOpenChunk(item) {
      const baseUrl = Settings.fontBaseUrl[process.env.NODE_ENV][item.path]
      setCookie()
      window.open(baseUrl, '_blank')
    }
  }
}
</script>

<style lang='scss' scoped>
.back-board{
  background: #f2f7fa;
  min-height: calc(100vh);
}
.container{
  margin: 40px;
  min-height: calc(100vh - 150px);
}
.board-title{
  h1{
    line-height: 50px;
    font-size: 26px;
    text-align: center;
    font-weight: bolder;
    color: #2d2d2d;
  }
  border-bottom: 2px solid #e9e9e9;
  margin-bottom: 20px;
}
.chunk{
  width: 300px;
  height: 100px;
  margin-right: 40px;
  margin-bottom: 40px;
  cursor: pointer;
  text-align: center;
  .board-icon{
    font-size: 60px;
    margin-right: 18px;
    color: #fff;
  }
  .board-msg{
    font-size: 16px;
    text-align: left;
    line-height: 30px;
    color: #fff;
  }
}
</style>
