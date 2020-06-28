import SysModel from "/assets/scripts/models/SysModel.js";
import ListModel from "/assets/scripts/models/ListModel.js";
import Modal from "/assets/scripts/components/Modal.js";
import form from "/assets/scripts/views/list/form.js";
import show from "/assets/scripts/views/list/show.js";

export default {
    index: function () {},
    create: function () {
        return form();
    },
    store: function () {
        const name = document.querySelector("input[name=name]");
        const date = document.querySelector("input[name=date]");
        const budget = document.querySelector("input[name=budget]");

        if (name.value.length == 0) {
            return Modal.show(
                "Opa!",
                'Você precisa preencher o "Nome da Lista"'
            );
        }

        let list = {
            name: name.value,
        };

        if (date.value.length !== 0) {
            list.date = date.value;
        }

        if (budget.value.length !== 0) {
            list.budget = budget.value;
        }

        const id = ListModel.insert(list);

        if (id) {
            SysModel.insert("current_list", id, true);
            window.location.hash = "#list/show";
        }
    },
    show: function () {
        const current_list_id = SysModel.select("current_list");

        if (current_list_id === -1) {
            // maybe change to #list/index later
            window.location.hash = "#list/create";
        }

        const list = ListModel.findOne({ id: current_list_id });

        // TODO: get list items
        return show(list.name, []);
    },
    edit: function () {},
    update: function () {},
    destroy: function () {},
};
