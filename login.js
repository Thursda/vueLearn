var app = new Vue({
    el: '#app',
    data: {
        formLabelAlign: { name: "", password: "" },
        username: '',
        password: '',
        imgcode: '',
        nonce: '',
        rememberme: false,
        fits: ['fill'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    },
    methods: {
        signIn: function() {
            alert("name:" + this.username + "\tpassword:" + this.password + "\tsign in");
        }
    }
})