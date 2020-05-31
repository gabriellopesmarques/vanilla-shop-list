export default function AddItemButton(type, buttonProps) {

    let buttonProperties = "";

    for (let prop in buttonProps) {
        buttonProperties += prop + '="' + buttonProps[prop] + '" ';
    }

    return `
        <div class="btn-bottom">
            <${type} ${buttonProperties} class="btn-lg btn-green">
                Adicionar Produto na Lista
            </${type}>
        </div>
    `;
}
