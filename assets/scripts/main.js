"use strict";

import router from "/assets/scripts/router.js";
import ProductController from "/assets/scripts/controllers/ProductController.js";
import ListController from "/assets/scripts/controllers/ListController.js";

/**
 * init and add event listeners
 */
function init() {
    document.getElementById("app").innerHTML = router.render();

    let addList = document.getElementById("addList");
    if (addList) {
        addList.addEventListener("click", ListController.store);
    }

    let addProductInList = document.getElementById("addProductInList");
    if (addProductInList) {
        addProductInList.addEventListener("click", ProductController.store);
    }
}

init();
window.addEventListener("popstate", function (event) {
    init();
});
