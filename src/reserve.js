export function createForm() {
    const table = document.createElement('div');
    table.classList.add('book-table-form');

    table.innerHTML = `Give us a call at <b>+11 4300 88000</b><br>
                        Looking forward to serving you :)`;

    return table;
}
