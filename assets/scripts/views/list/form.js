import Header from "/assets/scripts/components/Header.js";
import FormGroup from "/assets/scripts/components/FormGroup.js";
import AddItemButton from "/assets/scripts/components/AddItemButton.js";
import Promo from "/assets/scripts/components/Promo.js";

export default function ShopList() {
    return `
        ${Header()}
        <div class="container">
            ${FormGroup("Nome da Lista", {
                type: "text",
                name: "name",
                placeholder: "ex.: Mercado",
                autofocus: "",
            })}
            ${FormGroup("Data", {
                type: "date",
                name: "date",
                placeholder: "ex.: 20/07/2020",
            })}
            ${FormGroup("Orçamento", {
                type: "tel",
                name: "budget",
                placeholder: "ex.: R$ 200,00",
            })}
            ${Promo()}
            ${AddItemButton("button", "Criar Lista de Compras", { id: "addList" })}
        </div>
    `;
};
