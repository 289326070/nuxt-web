<template>
    <div>
        <h1>数据</h1>
        <!-- <div>标题：{{objList.title}}</div>
        <div>描述：{{objList.content}}</div>
        <div v-for="(item,index) in objList.list" :key="index">
           <h4>姓名：{{item.name}}</h4>
           <h4>年龄：{{item.age}}</h4>
        </div> -->
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
   async asyncData({app}){
       console.log('app--------',app)
      let res =  await app.$text('传递参数')
      console.log('res3',res)
        return {
          //  objList:res2.data.data
        }
    },

    data(){
        return {
                a:1,
                b:3,
         }
        },
    
}
</script>