import Modal from "/assets/scripts/components/Modal.js";
import form from "/assets/scripts/views/product/form.js";
import ProductModel from "/assets/scripts/models/ProductModel.js";

export default {
    index: function () {},
    create: function () {
        return form();
    },
    store: function () {
        let product = document.querySelector("input[name=product]");
        let price = document.querySelector("input[name=unity_price]");
        let quantity = document.querySelector("input[name=quantity]");

        if (
            product.value.length == 0 ||
            price.value.length == 0 ||
            quantity.value.length == 0
        ) {
            Modal.show("Opa!", "Você precisa preencher todos os campos");
        }
    },
    show: function () {},
    edit: function () {},
    update: function () {},
    destroy: function () {},
};
