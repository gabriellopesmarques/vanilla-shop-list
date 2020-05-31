import Header from '/assets/scripts/components/Header.js';
import Total from '/assets/scripts/components/Total.js';
import ProductList from '/assets/scripts/components/ProductList.js';
import AddItemButton from '/assets/scripts/components/AddItemButton.js';

export default function ShopList(){
    return `
    ${Header()}
    <div class="container">
        <h1 class="title"> Lista de Compras </h1>
        ${Total()}
        ${ProductList()}
        ${AddItemButton('a', {'href': '/#add-product'})}
    </div>
    `;
};
