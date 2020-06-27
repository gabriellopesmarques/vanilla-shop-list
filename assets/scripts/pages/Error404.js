import Header from "/assets/scripts/components/Header.js";

export default function Error404() {
    return `
    ${Header()}
    <div class="container">
        <h1 class="title"> Página não encontrada <br> 🐞</h1>
    </div>
    `;
}
