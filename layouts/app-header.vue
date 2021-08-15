<template>
    <div class="flex">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/demo1/text?a=1&b=2">demo1路由守卫都会跳转首页</nuxt-link>
        <nuxt-link to="/demo1/comment?a=1&b=2">评论</nuxt-link>
        <nuxt-link :to="{name:'demo1-text',params:{a:3,b:4},query:{a:333,b:444}}">动态路由</nuxt-link>
        <nuxt-link to="/demo2">demo2</nuxt-link>
        <nuxt-link to="/demo3">demo3</nuxt-link>
        <nuxt-link to="/demo2/text?a=1&b=2">测试页面不存在</nuxt-link>
    </div>
</template>
<script>
export default {
     
}
</script>
<style scope >
    .flex{
        display: flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        font-size: 20px;
        background:#000000;
        color:#fff;
        line-height: 10vh;
    
    }
    a{
        color:#fff;
         text-decoration:none;
    }
    a:hover{
        color:blue;
        text-decoration:none;
    }
</style>