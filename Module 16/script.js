console.log("Naman");

const App = {
    data(){
        return{
            itemList : [{
                id: "1",
                itemName: "iPhone 12 Pro",
                subtitle: "The ultimate iPhone.",
                price: "From ₹119900*",
                itemImage: "images/item1.jpg",
                url: "https://www.apple.com/in/shop/buy-iphone/iphone-12-pro"
            }, {
                id: "2",
                itemName: "iPhone SE",
                subtitle: "Lots to love, Less to spend.",
                price: "From ₹39900*",
                itemImage: "images/item2.jpg",
                url: "https://www.apple.com/in/shop/buy-iphone/iphone-se"
            }
            , {
                id: "3",
                itemName: "iPhone 11",
                subtitle: "As amazing as ever.",
                price: "From ₹54900*",
                itemImage: "images/item3.jpg",
                url: "https://www.apple.com/in/shop/buy-iphone/iphone-11"
            }, {
                id: "4",
                itemName: "Samsung Galaxy M31",
                subtitle: "Space Blue, 8GB RAM, 128GB Storage",
                price: "From ₹16,999*",
                itemImage: "images/item4.jpg",
                url: "https://www.amazon.in/Samsung-Galaxy-Space-Black-Storage/dp/B07HGLM366/ref=asc_df_B07HGLM366/?tag=googleshopdes-21&linkCode=df0&hvadid=397076931806&hvpos=&hvnetw=g&hvrand=4821265387760393974&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007796&hvtargid=pla-921590129718&psc=1&ext_vrnc=hi"
            }, {
                id: "5",
                itemName: "Samsung Galaxy M51",
                subtitle: "Electric Blue, 8GB RAM, 128GB Storage",
                price: "From ₹22,999*",
                itemImage: "images/item5.jpg",
                url: "https://www.amazon.in/Samsung-Galaxy-Electric-Blue-128GB-Storage/dp/B085J1868F/ref=asc_df_B085J1868F/?tag=googleshopdes-21&linkCode=df0&hvadid=397082017145&hvpos=&hvnetw=g&hvrand=4821265387760393974&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007796&hvtargid=pla-957979436620&psc=1&ext_vrnc=hi"
            }, {
                id: "6",
                itemName: "Samsung Galaxy M12",
                subtitle: "Blue, 64GB, 4GB RAM",
                price: "From ₹11500*",
                itemImage: "images/item6.jpg",
                url: "https://www.amazon.in/Samsung-Galaxy-Midnight-Blue-Storage/dp/B07HGJJ559"
            }]
        }
    }
}

Vue.createApp(App).mount('#vapp')