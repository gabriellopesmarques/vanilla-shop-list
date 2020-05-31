export default function FormGroup(label, inputProps) {

    let inputProperties = "";

    for (let prop in inputProps) {
        inputProperties += prop + '="' + inputProps[prop] + '" ';
    }

    return `
        <div class="form-group">
            <label>${label}</label>
            <input ${inputProperties}>
        </div>
    `;
}