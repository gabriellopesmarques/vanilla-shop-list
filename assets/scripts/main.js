"use strict";

import router from "/assets/scripts/router.js";
import ProductController from "/assets/scripts/controllers/ProductController.js";

/**
 * init and add event listeners
 */
function init() {

    /**
     * Render
     */
    document.getElementById("app").innerHTML = router.render();


    let addProductInList = document.getElementById('addProductInList');

    if (addProductInList) {
        addProductInList.addEventListener('click', ProductController.store);
    }

}

init();
window.addEventListener("popstate", function (event) {
    init();
});
