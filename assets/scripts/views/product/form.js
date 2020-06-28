import Header from "/assets/scripts/components/Header.js";
import FormGroup from "/assets/scripts/components/FormGroup.js";
import AddItemButton from "/assets/scripts/components/AddItemButton.js";
import Promo from "/assets/scripts/components/Promo.js";

export default function ShopList() {
    return `
        ${Header()}
        <div class="container">
            ${FormGroup("Produto", {
                type: "text",
                name: "product",
                placeholder: "ex.: Molho de Tomate",
                autofocus: "",
            })}
            ${FormGroup("Valor Unitário", {
                type: "tel",
                name: "unity_price",
                placeholder: "ex.: 4,00",
            })}
            ${FormGroup("Quantidade", {
                type: "number",
                name: "quantity",
                min: "1",
                step: "1",
                placeholder: "ex.: 2",
            })}
            ${Promo()}
            ${AddItemButton("button", "Adicionar Produto na Lista", { id: "addProductInList" })}
        </div>
    `;
};
