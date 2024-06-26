import salad from './images/salad.jpg';
import chicken from './images/chicken.webp';
import veg from './images/veg.jpg';
import water from './images/water.jpg';
import ksi from './images/ksi.jpg';

const menuItems = [
    {
        name: 'Reconstructed Chicken',
        imgSrc: chicken,
        description: `Chicken killed and cooked and then reconstruced back to its orignal shape.
                      A true masterclass dish served by none other than the master chef, the one and only
                      Harry Lewis.`
    },
    {
        name: 'Salad',
        imgSrc: salad,
        description: `A simple but delicious and sexy loooking mix veggies that is here to delight you.
                      Perfect for fat fucks who crave tasty food all the time but worried about calories.`
    },
    {
        name: 'Veg Special',
        imgSrc: veg,
        description: `This is for all the vegans out there. We know the dish looks lame in the picture.
                      It's because you are lame since you chose to vegan. "Boring person deserves boring
                      food" - Sun Tzu, the art of food.`
    },
    {
        name: 'Holy Water',
        imgSrc: water,
        description: `A breathtaking glass of holy water that washes away your sins. Personally blessed
                      and served by our lovely christian waiter Tobi.`
    },
    {
        name: 'Shut Up',
        imgSrc: ksi,
        description: `This is a bartender special drink. Get ready for the mysterious and bizzare experience
                      you'll have with this drink.`
    }
];

export function createItems() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    for(let i = 0; i < menuItems.length; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        const img = new Image();
        img.src = menuItems[i].imgSrc;

        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.textContent = menuItems[i].name;
        const para = document.createElement('p');
        para.textContent = menuItems[i].description;

        div.appendChild(h2);
        div.appendChild(para);
        item.appendChild(img);
        item.appendChild(div);

        menu.appendChild(item);
    }
    return menu;
}