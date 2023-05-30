import { getTypes, setType } from './database.js'

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "type") setType(parseInt(e.target.value));
    }
)

export const TypeSelector = () => {
    let html = "<ul>\n"
    const types = getTypes();

    for (const type of types) {
        html += `<li>
            <input type="radio" name="type" value="${type.id}" /> ${type.type}
        </li>\n`
    }

    html += "</ul>"

    return html;
}