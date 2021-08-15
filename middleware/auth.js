//定义路由守卫
export default({store,route,redirect,params,query,req,res}) => {
    console.log('当前路由',route.path,route.query,'当前环境',process.env.NODE_ENV)

    if(!store || store.state.userInfo){
        console.log('路由守卫')
    //  redirect('/')
    }else{
        console.log('监听路由')
    }
   
}