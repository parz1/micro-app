<template>
  <div id="sub-container"></div>
</template>

<script lang="ts">
import { start } from 'qiankun'
import { registerApps } from '../utils/qiankun'
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      registerApps()
      start({
        sandbox: false,
        // sandbox: {
        //   experimentalStyleIsolation: true // 样式隔离
        // }
      })
    }
  }
}
</script>
