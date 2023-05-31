import { getSizes, setSize, getOrderBuilder } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value));
        }
    }
)

export const DiamondSizes = () => {
    const isSelected = (size) => {
        const curentOrder = getOrderBuilder();
        if (curentOrder.sizeId === size.id) return "checked"
    }
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" ${isSelected(size)}/> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

