import { getTypes, setType, getOrderBuilder } from "./dataAccess.js"

document.addEventListener(
    "change",
    (e) => {
        if (e.target.name === "type") setType(parseInt(e.target.value));
    }
)

export const TypeSelector = () => {
    const isSelected = (type) => {
        const curentOrder = getOrderBuilder();
        if (curentOrder.typeId === type.id) return "checked"
    }

    let html = "<ul class=\"choices\" id=\"typeSelector\">\n"
    const types = getTypes();

    for (const type of types) {
        html += `<li>
            <input type="radio" name="type" value="${type.id}" ${isSelected(type)}/> ${type.type}
        </li>\n`
    }

    html += "</ul>"

    return html;
}