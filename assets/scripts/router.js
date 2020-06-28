import MenuController from "/assets/scripts/controllers/MenuController.js";
import ErrorController from "/assets/scripts/controllers/ErrorController.js";
import ListController from "/assets/scripts/controllers/ListController.js";
import ProductController from "/assets/scripts/controllers/ProductController.js";

export default {
    routes: {
        "404": ErrorController.error404,
        "/": ListController.show,
        "#menu": MenuController.index,
        "#product": ProductController.index,
        "#product/create": ProductController.create,
        "#list": ListController.show,
        "#list/create": ListController.create,
    },
    render() {
        const route = location.hash.length > 0 ? location.hash : "/";

        if (typeof this.routes[route] !== "undefined") {
            return this.routes[route]();
        }

        return this.routes["404"]();
    },
};
