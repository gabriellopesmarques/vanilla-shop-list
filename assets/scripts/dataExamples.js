import SysModel from "/assets/scripts/models/SysModel.js";
import ProductModel from "/assets/scripts/models/ProductModel.js";
import ListModel from "/assets/scripts/models/ListModel.js";

console.log(SysModel.select());

ProductModel.insert({
    name: "Leite",
    price: 4.0,
});

ProductModel.insert({
    name: "Pão (Unid.)",
    price: 0.7,
});

ProductModel.insert({
    name: "Arroz 5kg",
    price: 15.9,
});

ProductModel.insert({
    name: "Maionese",
    price: 8.7,
});

ProductModel.insert({
    name: "Feijão 1kg",
    price: 4.8,
});

ProductModel.delete({ name: "Maionese" });

ListModel.insert({
    name: "Mercado",
    products: [
        {
            product_id: 1,
            qntd: 12,
        },
        {
            product_id: 2,
            qntd: 6,
        },
        {
            product_id: 3,
            qntd: 1,
        },
        {
            product_id: 5,
            qntd: 2,
        },
    ],
});

console.log(ProductModel.select({ price: 4 }));

var localStorageSpace = function () {
    var data = "";

    console.log("Current local storage: ");

    for (var key in window.localStorage) {
        if (window.localStorage.hasOwnProperty(key)) {
            data += window.localStorage[key];
            console.log(
                key +
                    " = " +
                    (
                        (window.localStorage[key].length * 16) /
                        (8 * 1024)
                    ).toFixed(2) +
                    " KB"
            );
        }
    }

    console.log(
        data
            ? "\n" +
                  "Total space used: " +
                  ((data.length * 16) / (8 * 1024)).toFixed(2) +
                  " KB"
            : "Empty (0 KB)"
    );
    console.log(
        data
            ? "Approx. space remaining: " +
                  (5120 - ((data.length * 16) / (8 * 1024)).toFixed(2)) +
                  " KB"
            : "5 MB"
    );
};

localStorageSpace();
