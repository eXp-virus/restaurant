import restaurant from './images/restaurant.jpg';
import simon from './images/simon.png';
import lauren from './images/lauren.jpeg';

const pageContent = {
    restaurantInfo: `Ladies and gentlemen and all the other genders out there,
                    since you've come to know about our restaurant consider yourself lucky
                    because <b>Mi BOMBA</b> is the finest restaurant in this entire
                    universe. Not only will you enjoy our luxurious environment, delicious food,
                    you might also experience all sorts of emotions like pleasure, trauma, ptsd and
                    god knows what. So reserve a table, strap your seatbelt because you're gonna experience 
                    wildest tastes of your life. `,
    chefInfo: {
        header: `Meet our head chef`,
        about: `Simon Minter aka Miniminter brings to the kitchen his extraordinary cooking skills, 
                leadership and over 10 years of experience. Under his supervision, it's impossible that
                any food that gets served will taste mediocre.`
    },
    review: `"Their dishes tastes so good that it made me want to start throwing it back right there
            just like I do on my Onlyfans"`
}

export function createHeader() {
    const header = document.createElement('div');
    header.classList.add('main-header');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('home-image');
    const img = new Image();
    img.src = restaurant;
    imgContainer.appendChild(img);

    const para = document.createElement('div');
    para.innerHTML = pageContent.restaurantInfo;

    header.appendChild(imgContainer);
    header.appendChild(para);
    return header;
}

export function createChef() {
    const container = document.createElement('div');
    container.classList.add('chef');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = pageContent.chefInfo.header;
    const p = document.createElement('p');
    p.textContent = pageContent.chefInfo.about;
    div.appendChild(h1);
    div.appendChild(p);

    const img = new Image();
    img.src = simon;
    container.appendChild(div);
    container.appendChild(img);

    return container;
}

export function createReviewSection() {
    const review = document.createElement('div');
    review.classList.add('reviews');
    const img = new Image();
    img.src = lauren;
    const para = document.createElement('p');
    para.textContent = pageContent.review;

    review.appendChild(img);
    review.appendChild(para);
    return review;
}