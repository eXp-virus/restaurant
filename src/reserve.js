export function createForm() {
    const container = document.createElement('div');
    container.classList.add('form-container');
    const header = document.createElement('h1');
    header.textContent = 'Reserve a table';
    const table = document.createElement('div');
    table.classList.add('book-table');

    table.innerHTML = `You can reach out to us at <b>+11 4300 88000</b><br>
                        Looking forward to serving you :)`;

    container.appendChild(header);
    container.appendChild(table);
    return container;
}
