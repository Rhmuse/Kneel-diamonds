import { getStyles, setStyle, getOrderBuilder } from "./database.js"

const styles = getStyles()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value));
        }
    }
)

export const JewelryStyles = () => {

    const buildStyleListItem = (style) => {
        return `<li><input type="radio" name="style" value="${style.id}" ${isSelected(style)}/>${style.style}</li>\n`
    }

    const isSelected = (style) => {
        const curentOrder = getOrderBuilder();
        if (curentOrder.styleId === style.id) return "checked"
    }

    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(buildStyleListItem)


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

