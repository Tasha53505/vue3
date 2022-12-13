const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            return this.cart.push(id)
        },

        removeFromCart(id) {
            return this.cart.pop(id)
        }

    }
})
