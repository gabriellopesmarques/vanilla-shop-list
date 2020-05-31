export default {
    tableName: "lists",
    insert(listObject) {
        let lists = this.getData();

        listObject.id = lists.autoincrement + 1;
        lists.data.push(listObject);
        lists.autoincrement = listObject.id;
        lists.map[listObject.id] = lists.data.length - 1;
        localStorage.setItem(this.tableName, JSON.stringify(lists));
        const isSaved = this.select({ id: listObject.id });

        if (isSaved.length) {
            return true;
        }

        return false;
    },
    select(conditions) {
        const lists = this.getData();
        let select = [];

        for (const list of lists.data) {
            let countMatch = 0;
            for (const condition in conditions) {
                if (
                    list &&
                    list.hasOwnProperty(condition) &&
                    list[condition] == conditions[condition]
                ) {
                    countMatch++;
                }
            }

            if (Object.keys(conditions).length === countMatch) {
                select.push(list);
            }
        }

        return select;
    },
    update(condition, data) {
        let lists = this.getData();
        const select = this.select(condition);

        for (const list of select) {
            let index = lists.map[list.id];
            Object.assign(lists.data[index], data);
        }

        localStorage.setItem(this.tableName, JSON.stringify(lists));
    },
    delete(condition) {
        let lists = this.getData();
        const select = this.select(condition);

        for (const list of select) {
            let index = lists.map[list.id];
            delete lists.map[list.id];
            delete lists.data[index];
        }

        localStorage.setItem(this.tableName, JSON.stringify(lists));
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