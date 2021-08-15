<template>
    <div>
        <h1>数据</h1>
        <div>{{title}}</div>
        <div>标题：{{objList.title}}</div>
        <div>描述：{{objList.content}}</div>
        <div v-for="(item,index) in objList.list" :key="index">
           <h4>姓名：{{item.name}}</h4>
           <h4>年龄：{{item.age}}</h4>
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
   async asyncData({$axios}){
        //let res =  await $axios({url:'/data/list.json'})
       // console.log('读取数据res',res.data)
        let res2 = await $axios({url:'/mock/6112a620d4342705675681b3/blog-web/api/text'})
       console.log('res2',res2.data.data)
        return {
           // title:res.data.title,
            objList:res2.data.data
        }
    },
    async fetch({$axios}){
        //  let res =  await $axios({url:'/data/list.json'})
        // console.log('读取数据fetch',res.data)
    },
    data(){
        return {
                a:1,
                b:3,
                title:'1'
         }
        },
    
}
</script>