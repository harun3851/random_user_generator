const app = Vue.createApp({
    template:'',
    data(){
        return{
            firstname:'john',
            lastname:'doe',
            email:'john@gmail',
            gender:'male',
            picture:'https://media.istockphoto.com/id/1411901693/fi/valokuva/shush-ele-pit%C3%A4%C3%A4-hiljaisena-avatar-mies-shh-muotokuva.jpg?s=612x612&w=0&k=20&c=iRSgYupw0PZA7EaXhrv9CaVPQDFoDuX5Z9kAx-TJtes=',
        }
    },
    methods:{
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            this.firstname=results[0].name.first
            this.lastname=results[0].name.last
            this.email=results[0].email
            this.gender=results[0].gender
            this.picture=results[0].picture.large      
        },
    },

})
app.mount('#app')