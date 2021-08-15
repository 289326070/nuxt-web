<template>
    <div>
        <h1>页面不存在</h1>
        <h6>{{error.message}}</h6>
    </div>
</template>
<script>
export default {
    props:['error']
}
</script>