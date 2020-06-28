import Header from "/assets/scripts/components/Header.js";
import Total from "/assets/scripts/components/Total.js";
import ProductList from "/assets/scripts/components/ProductList.js";
import AddItemButton from "/assets/scripts/components/AddItemButton.js";

export default function () {
    return /*jsx*/`
        ${Header()}
        <div class="container">
            <h1 class="title"> Lista de Compras </h1>
            ${Total()}
            ${ProductList()}
            ${AddItemButton("a", "Adicionar Produto na Lista", { href: "/#product/create" })}
        </div>
    `;
}
