import SysModel from "/assets/scripts/models/SysModel.js";
import welcome from '/assets/scripts/views/welcome.js';

export default {
    index: function () {
        const current_list = SysModel.select('current_list');

        if (current_list === -1) {
            return welcome();
        }

        window.location.hash = '#list/show';
    },
};
