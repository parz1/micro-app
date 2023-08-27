export default {
  subApps: [
    // {
    //   name: 'app-vue3', // 子应用名称，跟package.json一致
    //   entry: '//localhost:14234', // 子应用入口，本地环境下指定端口
    //   container: '#sub-container', // 挂载子应用的dom
    //   activeRule: '/app/app-vue3', // 路由匹配规则
    //   props: {} // 主应用与子应用通信传值
    // },
    {
      name: 'ansuw', // 子应用名称，跟package.json一致
      entry: '//localhost:7106/admin/index3.html', // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: '/app/admin', // 路由匹配规则
      props: {} // 主应用与子应用通信传值
    },
    {
      name: 'ansuwIndex', // 子应用名称，跟package.json一致
      entry: '//localhost:7106/admin/check/index.html', // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: '/app/admin/index', // 路由匹配规则
      props: {} // 主应用与子应用通信传值
    },
  ]
}
