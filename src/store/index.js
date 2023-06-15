import { createStore } from "vuex";

export const store = createStore({
    state: {
        products: [
            {
                id: 1,
                company: 'Sneaker Company',
                shoes: 'Fall Limited Edition Sneakers',
                description:
                    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
                discount: 50,
                discountPrice: 125,
                price: 250
            }
        ],
        cart: []
    },
    mutations: {
        addToCart(state,product) {
            state.cart.push(product);
        }
    }
});