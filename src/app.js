// app.js
new Vue({
    el: '#app', // Connect to the 'app' div in our HTML
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

new Vue({
    el: '#trigger',
    data: {
        message: ''
    },
    methods: {
        bust: function() {
            const parentMessage = ref('Parent')
            const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
            this.message = "SIUU";
        }
    }
})
