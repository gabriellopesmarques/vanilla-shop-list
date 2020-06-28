export default function AddItemButton(type, label, buttonProps) {
    let buttonProperties = "";

    for (let prop in buttonProps) {
        buttonProperties += prop + '="' + buttonProps[prop] + '" ';
    }

    return `
        <div class="btn-bottom">
            <${type} ${buttonProperties} class="btn-lg btn-green">
                ${label}
            </${type}>
        </div>
    `;
}
