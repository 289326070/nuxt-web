<template>
    <div>
        <h1 class="xulong_css">测试全局样式是否可用</h1>
        <nuxt-link to="/demo1/text?a=1&b=2">路由1</nuxt-link>
        <nuxt-link to="/demo1/comment?a=1&b=2">评论</nuxt-link>
        <nuxt-link :to="{name:'demo1-text',params:{a:3,b:4},query:{a:333,b:444}}">动态路由</nuxt-link>
        <Nuxt />
    </div>
</template>
<script>
export default {
    //路由中间键
  middleware:'auth',
  asyncData ({ params,query }) {
      console.log('params----------',query)
    // called every time before loading the component
    return {
      slug: params.a
    }
  }
}
</script>