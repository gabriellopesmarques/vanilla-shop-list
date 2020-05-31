import Error404 from '/assets/scripts/pages/Error404.js';
import ShopList from '/assets/scripts/pages/ShopList.js';
import FormProduct from '/assets/scripts/pages/FormProduct.js';

export default {
	routes: {
		'404': Error404(),
		'/': ShopList(),
		'#add-product': FormProduct()
	},
	render() {
		const route = location.hash.length > 0 ? location.hash : "/";

		if (typeof this.routes[route] !== "undefined") {
			return this.routes[route];
		}

		return this.routes['404'];
	}
}
