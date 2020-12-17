


// Vue.component('search-filter', {
//     template: `<input type = 'text' v-on:input = 'search'> </input> `
// })
Vue.component('products', {
    props: ['items1'],
    template:`<div>
                <div v-bind:items = 'items1'> {{ items1 }} </div>
              </div>`
})

new Vue ( {
    el: '#app',
    data: {
        items: [],
        search: function () {

        }
        
    },
    methods: {        
        fetching: function () {
            fetch("https://mock-api-builder.vercel.app/api/schema/get/5fdb159b0c709200081ef06a") 
            .then(r => r.json()) 
            .then(json => json)
        } 
    },
    mounted() {
        this.items = this.fetching()
    } 
        
    
})


