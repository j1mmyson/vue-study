const app = new Vue({
    el: "#app",
    data: {
        message: "Hello vue!!!!",
    },
});

const app2 = new Vue({
    el: "#app-2",
    data: {
        message: "Time:" + new Date(),
    },
});

const app3 = new Vue({
    el: "#app-3",
    data: {
        tf: true,
    },
});

const app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { title: "ToDo1" },
            { title: "ToDo2" },
            { title: "ToDo3" },
        ]
    },
});

const app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Hello Vue!",
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('');
        },
    },
});

const app6 = new Vue({
    el: "#app-6",
    data: {
        message: "Hi",
    },
    methods: {
        someAction: function() {
            console.log(this.message);
        },
    },
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> {{ todo.text }} </li>'
});

const app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            { id: 0, text: 'ToDo1'},
            { id: 1, text: 'ToDo2'},
            { id: 2, text: 'ToDo3'},
        ]
    },
});