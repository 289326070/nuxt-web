路由
    约定式 :demo1文件展示了
        展示区：<nuxt>
        声明式跳转：<nuxt-link :to="{name:'demo1-comment',params:{uid:1},query:{a:5,b:6}}">评论2</nuxt-link>
        name:路由名 目录名-其它目录-文件名
        param:key要对等文件名
        
        子路由：
            目录代表子路由：子路由内部同级的文件，代表的是同一级目录

        展示区层级控制
        pages/一级展示/二级展示
                     /index.vue 会在一级展示
                     /index.vue 空文档 代表有默认页，不会找寻其它 .vue页面
    配置


    路由守卫
    插件
    

    跨域配置 在nuxt.config.js 内配置
         axios: {
            proxy:true,  //开启跨域
            //prefix:'/api' , // baseUrl
            Credential:true
        },
        proxy:{
            '/api':{
            targer:'http://localhost:3001',    //代理转发地址
            changeOrigin:true,
            pathRewrite:{
                // "^/api":''
            }

            }
        },

