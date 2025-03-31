export const menu = () => {
    const foodItemArray = [
        {
          "type": "Beverages",
          "name": "Honey Tea",
          "description": "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
          "price": 2,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Beverages",
          "name": "Beary Tea",
          "description": "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
          "price": 3,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Sides",
          "name": "Toast and Jam",
          "description": "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
          "price": 1,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Sides",
          "name": "Fresh Fruit",
          "description": "A small bowl of fresh fruit, whatever we find at the market for the day.",
          "price": 3,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Main Dishes",
          "name": "Pancakes",
          "description": "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
          "price": 4,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Main Dishes",
          "name": "French Toast",
          "description": "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
          "price": 5,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Main Dishes",
          "name": "Beary Veggie Sandwich",
          "description": "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
          "price": 8,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Main Dishes",
          "name": "BLT",
          "description": "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
          "price": 6,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Main Dishes",
          "name": "Bagel and Lox",
          "description": "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
          "price": 8,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Main Dishes",
          "name": "Honeycomb",
          "description": "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
          "price": 6,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Main Dishes",
          "name": "Beary Bowl",
          "description": "Get a big ole bowl of our berries! Side of honey is $1 extra.",
          "price": 7,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        },
        {
          "type": "Main Dishes",
          "name": "The Beary Best Porridge",
          "description": "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.",
          "price": 5,
          "image": "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        }
      ]
      
    const body = document.querySelector('.body');
    const content = document.getElementById('content');
    const contentWrapper = document.createElement('div');
    const mainContent = document.createElement('div');
    const footer = document.createElement('footer');
    const header = document.createElement('div');


    footer.textContent = 'hello';
    header.className = 'header';
    footer.className = 'footer';
    mainContent.className = 'mainContent';
    contentWrapper.className = 'contentWrapper';
    header.textContent = "Menu";


    mainContent.append(header);

    const foodItemTypes = [];
    foodItemArray.forEach((obj) => {
        if(!foodItemTypes.includes(obj.type)){
            foodItemTypes.push(obj.type);
        }
    });

    foodItemTypes.forEach((type) => {
        const itemTypeHeader = document.createElement('div');
        itemTypeHeader.textContent = type;
        itemTypeHeader.className = 'itemTypeHeader';
        mainContent.append(itemTypeHeader);
        foodItemArray.forEach((obj) => {
            if(obj.type === type) {
                const foodItemContainer  = document.createElement('div');
                const foodItemHeader = document.createElement('div');
                const foodItemPrice = document.createElement('div');
                const foodItemImage = document.createElement('img');
            
                foodItemContainer.className = 'foodItemContainer';
                foodItemHeader.className = 'foodItemHeader';
                foodItemPrice.className = 'foodItemPrice';
                foodItemImage.className = 'foodItemImage';

                foodItemHeader.textContent = obj.description;
                foodItemPrice.textContent = obj.price + '$';
                foodItemImage.src = obj.image;
            
                foodItemContainer.append(foodItemHeader, foodItemPrice, foodItemImage);
                mainContent.append(foodItemContainer);
            }
        });
    });

    console.log(foodItemTypes)
    

    contentWrapper.append(mainContent);
    content.append(contentWrapper, footer);
}
