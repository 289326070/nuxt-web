<template>
    <div>
        <h1>评论</h1>
        <nuxt-link :to="{name:'demo1-comment-uid',params:{uid:1},query:{a:5,b:6}}">评论1</nuxt-link>
        <nuxt-link :to="{name:'demo1-comment',params:{uid:1},query:{a:5,b:6}}">评论2</nuxt-link>
        <nuxt />
    </div>
</template>