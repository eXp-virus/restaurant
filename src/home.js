export function createHeader() {
    const header = document.createElement('div');
    header.classList.add('main-header');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('home-image');
    const img = document.createElement('img');
    imgContainer.appendChild(img);

    const para = document.createElement('div');
    para.textContent = `Ladies and gentlemen and all the other genders out there,
                        since you've come to know about our restaurant consider yourself lucky
                        because Mi bomba is the finest and most delicous restaurant in this intire
                        universe. Even aliens got nothing on us `;

    header.appendChild(imgContainer);
    header.appendChild(para);
    return header;
}

export function createHtmlCards() {
    const cards = document.createElement('div');
    cards.classList.add('cards');

    for(let i = 0; i < 3; i++) {
        const card = document.createElement('div');
        cards.appendChild(card);
    }
    return cards;
}

export function createReviewSection() {
    const review = document.createElement('div');
    review.classList.add('reviews');
    const para = document.createElement('p');
    const user = document.createElement('div');

    review.appendChild(para);
    review.appendChild(user);
    return review;
}