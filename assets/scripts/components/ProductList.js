import ListItem from "/assets/scripts/components/ListItem.js";

export default function ProductList() {
    return `
        <ul class="product-list">
            ${ListItem()}
        </ul>
    `;
}
