<template>
    <div>
        <h1>生命周期勾子函数</h1>
      a: {{a}}
      <br>
      b:{{b}}
       
        <div>
            <Demo/>
        </div>
       
    </div>
</template>
<script>
export default {
    validate({parm,query}){
        console.log('校验业务',parm,query)
        return true
    },
    middleware(context){
        console.log('middleware')
    },
    asyncData(context){
        //读数据，返回级组件
        console.log('asyncDate')
        return {
            b:2
        }
    },    
    fetch(content){
        console.log('fetch')
    },
    data(){
       return {
            a:1,
            b:3
       }
    },
    //服务器与客户端之间
    beforeCreate(){
        console.log('-------beforeCreate---------')
    },
    created(){
        console.log('-------created---------')
    },
    //客户端
    beforeMount(){
        console.log('-------beforeMount-客户端--------',window)
    },
    mounted(){
        console.log('-------mounted---------')
    },
   
     beforeUpdata(){
        console.log('-------beforUpdata---------')
    },
    update(){
        console.log('-------update---------')
    },
     beforeDestroy(){
        console.log('-------beforDestroy---------')
    },
    destroyed(){
        console.log('-------destroyed---------')
    }
}
</script>