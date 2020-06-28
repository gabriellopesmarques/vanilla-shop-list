export default {
    tableName: "sys",
    insert(key, value, overwrite = false) {
        let sys = this.getData();

        if (!overwrite && sys.hasOwnProperty(key)) {
            return false;
        }

        sys[key] = value;

        localStorage.setItem(this.tableName, JSON.stringify(sys));

        sys = this.getData();

        if (sys.hasOwnProperty(key)) {
            return true;
        }

        return false;
    },
    select(key = false) {
        let sys = this.getData();

        if (key !== false) {
            if (sys.hasOwnProperty(key)) {
                return sys[key];
            }

            return false;
        }

        return sys;
    },
    update(key, value) {
        let sys = this.getData();

        if (!sys.hasOwnProperty(key)) {
            return false;
        }

        sys[key] = value;

        localStorage.setItem(this.tableName, JSON.stringify(sys));

        sys = this.getData();

        if (sys.hasOwnProperty(key) && sys[key] == value) {
            return true;
        }

        return false;
    },
    delete(key) {
        let sys = this.getData();

        if (!sys.hasOwnProperty(key)) {
            return false;
        }

        delete sys[key];

        localStorage.setItem(this.tableName, JSON.stringify(sys));

        if (!sys.hasOwnProperty(key)) {
            return true;
        }

        return false;
    },
    createTable() {
        let initialData = {
            current_list: -1, // -1: none
            singup_timestamp: new Date().getTime(),
        };

        localStorage.setItem(this.tableName, JSON.stringify(initialData));
    },
    getData() {
        if (this.tableExists() == false) {
            this.createTable();
        }

        return localStorage.getItem(this.tableName)
            ? JSON.parse(localStorage.getItem(this.tableName))
            : {};
    },
    tableExists() {
        return new Boolean(localStorage.getItem(this.tableName));
    },
};
