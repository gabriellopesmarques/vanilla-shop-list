export default {
    show: function (title, text, theme = "warning") {
        let modal = document.createElement("div");
        modal.setAttribute("id", "modal");
        modal.setAttribute("class", "modal modal-lightbox");

        const content = /*jsx*/ `
            <div class="modal modal-lightbox" id="modal">
                <div class="modal-card">
                    <h1 class="${theme}">${title}</h1>
                    <p>${text}</p>
                    <button
                        class="modal-close"
                        id="modalClose"
                        onClick="function modalClose(){ document.getElementById('modal').remove(); }; modalClose();">
                            Okay!
                    </button>
                </div>
            </div>
        `;

        modal.innerHTML = content;
        document.getElementById("app").append(modal);
    },

    hide: function () {
        const modal = document.getElementById("modal");

        if (modal) {
            return modal.remove();
        }

        return false;
    },
};
