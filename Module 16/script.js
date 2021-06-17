console.log("Naman")

const App = {
    data(){
        return{
            itemList : [{
                id: "lco1",
                itemName: "iPhone 12 Pro",
                subtitle: "The ultimate iPhone.",
                price: "From ₹119900*",
                itemImage: "item1.jpg",
                url: "https://www.apple.com/in/shop/buy-iphone/iphone-12-pro"
            }, {
                id: "lco2",
                itemName: "iPhone SE",
                subtitle: "Lots to love, Less to spend.",
                price: "From ₹39900*",
                itemImage: "item2.jpg",
                url: "https://www.apple.com/in/shop/buy-iphone/iphone-se"
            }
            , {
                id: "lco3",
                itemName: "iPhone 11",
                subtitle: "As amazing as ever.",
                price: "From ₹54900*",
                itemImage: "item3.jpg",
                url: "https://www.apple.com/in/shop/buy-iphone/iphone-11"
            }]
        }
    }
}

Vue.createApp(App).mount('#vapp')