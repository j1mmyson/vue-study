// const { default: axios } = require("axios");

const app = new Vue({
    el: "#app",
    data: {
        message: "Hello vue!!!!",
        done: false,
        id: "",
        name: "",
    },
    methods:{
        getData: function(){
            axios
                .get('https://cors-anywhere.herokuapp.com/http://ec2-3-17-39-222.us-east-2.compute.amazonaws.com/api/user/bwson98')
                .then((response) => {
                    this.message = response.data;
                    this.done = true;
                    this.id = response.data.user_id;
                    this.name = response.data.user_name;
                    console.log(this);
                })
        },
    },
});