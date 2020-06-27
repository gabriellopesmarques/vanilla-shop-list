"use strict";

import router from "/assets/scripts/router.js";
document.getElementById("app").innerHTML = router.render();

window.addEventListener("popstate", function (event) {
    document.getElementById("app").innerHTML = router.render();
});
