export default ({$axios}, inject)=>{
    // text 方法注入到context/vue/store
    //debugger
    console.log('inject',inject)
    inject('text',(a) => $axios.$get('/mock/6112a620d4342705675681b3/blog-web/api/text') )

}