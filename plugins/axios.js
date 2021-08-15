export default function({$axios,redirect,route,store}){
    // 基本配置
    $axios.defaults.timeout = 5000
    $axios.defaults.baseURL = "http://mengxuegu.com:7300"
    console.log('基本配置=>', $axios.defaults.baseURL)
    //请求拦截
    $axios.onRequest(config => {
        console.log('请求拦截')
        // config.header.token == '加token'
    })

    //响应拦截
    $axios.onRequest(res => {

        if(res.data === 2 && route.fullPath !== '/login'){
            redirect('/login?path='+route.fullpath)
        }
        console.log('响应拦截')
        return res
    })

    // 错误处理
    $axios.onError(error => {
        console.log('错误处理',error)
        return error
    })
}