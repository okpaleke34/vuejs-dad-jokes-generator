const app =  Vue.createApp({
    // template: "<h1>Hello World</h1>"
    data(){
        this.getUser()
        return{
            url:"ks",
            joke:"loading,,,"
        }
    },
    methods:{
        async getUser(){
            const pageid = Math.floor(Math.random() * 32);
            const jokeid = Math.floor(Math.random() * 20);
            const res = await fetch(`https://icanhazdadjoke.com/search?page=${pageid}`,{
                "method": 'GET',
                headers: new Headers({
                    'Accept':'application/json'
                })
            })
            const { results } = await res.json()
            this.url = "https://icanhazdadjoke.com/j/"+results[jokeid].id
            this.joke = results[jokeid].joke
        }
    }
})

app.mount("#app")