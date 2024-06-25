export function createMenu() {
    const item = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    imgContainer.appendChild(img);

    const itemDescription = document.createElement('div');
    const h3 = document.createElement('h3');
    const para = document.createElement('p');
    itemDescription.appendChild(h3);
    itemDescription.appendChild(para);

    item.appendChild(imgContainer);
    item.appendChild(itemDescription);

    return item;
}