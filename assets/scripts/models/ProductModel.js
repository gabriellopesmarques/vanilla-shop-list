export default {
    tableName: "products",
    insert(productObject) {
        let products = this.getData();

        productObject.id = products.autoincrement + 1;
        products.data.push(productObject);
        products.autoincrement = productObject.id;
        products.map[productObject.id] = products.data.length - 1;
        localStorage.setItem(this.tableName, JSON.stringify(products));
        const isSaved = this.select({ id: productObject.id });

        if (isSaved.length) {
            return productObject.id;
        }

        return false;
    },
    select(conditions) {
        const products = this.getData();
        let select = [];

        for (const product of products.data) {
            let countMatch = 0;
            for (const condition in conditions) {
                if (
                    product &&
                    product.hasOwnProperty(condition) &&
                    product[condition] == conditions[condition]
                ) {
                    countMatch++;
                }
            }

            if (Object.keys(conditions).length === countMatch) {
                select.push(product);
            }
        }

        return select;
    },
    update(condition, data) {
        let products = this.getData();
        const select = this.select(condition);

        for (const product of select) {
            let index = products.map[product.id];
            Object.assign(products.data[index], data);
        }

        localStorage.setItem(this.tableName, JSON.stringify(products));
    },
    delete(condition) {
        let products = this.getData();
        const select = this.select(condition);

        for (const product of select) {
            let index = products.map[product.id];
            delete products.map[product.id];
            delete products.data[index];
        }

        localStorage.setItem(this.tableName, JSON.stringify(products));
    },
    createTable() {
        let initialData = {
            map: {},
            autoincrement: 0,
            data: [],
        };

        localStorage.setItem(this.tableName, JSON.stringify(initialData));
    },
    getData() {
        if (this.tableExists() == false) {
            this.createTable();
        }

        const tableName = this.tableName;
        return localStorage.getItem(tableName)
            ? JSON.parse(localStorage.getItem(tableName))
            : {};
    },
    tableExists() {
        return new Boolean(localStorage.getItem(this.tableName));
    },
};
