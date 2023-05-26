import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

const buildStyleListItem = (style) => {
    return `<li><input type="radio" name="style" value="${style.id}" />${style.style}</li>\n`
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(event.target.value);
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(buildStyleListItem)


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

