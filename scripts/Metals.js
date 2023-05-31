import { getMetals, getOrderBuilder, setMetal } from "./database.js"

const metals = getMetals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value));
        }
    }
)


export const Metals = () => {
    const isSelected = (metal) => {
        const curentOrder = getOrderBuilder();
        if (curentOrder.metalId === metal.id) return "checked"
    }

    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" ${isSelected(metal)}/> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

