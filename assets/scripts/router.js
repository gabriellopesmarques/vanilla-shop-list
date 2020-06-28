import MenuController from "/assets/scripts/controllers/MenuController.js";
import ErrorController from "/assets/scripts/controllers/ErrorController.js";
import WelcomeController from "/assets/scripts/controllers/WelcomeController.js";
import ListController from "/assets/scripts/controllers/ListController.js";
import ProductController from "/assets/scripts/controllers/ProductController.js";

export default {
    routes: {
        "404": ErrorController.error404,
        "/": WelcomeController.index,
        "#menu": MenuController.index,
        "#list": ListController.index,
        "#list/show": ListController.show,
        "#list/create": ListController.create,
        "#list/edit": ListController.edit,
        "#product": ProductController.index,
        "#product/show": ProductController.show,
        "#product/create": ProductController.create,
        "#product/edit": ProductController.edit,
    },
    render() {
        const route = location.hash.length > 0 ? location.hash : "/";

        if (typeof this.routes[route] !== "undefined") {
            return this.routes[route]();
        }

        return this.routes["404"]();
    },
};
