
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from './Metals.js'
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./dataAccess.js"
import { TypeSelector } from './TypeSelector.js'

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") addCustomOrder();
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices--metals options">
                <h2>Metals</h2>
                <section>${Metals()}</section>
            </section>
            <section class="choices--sizes options">
                <h2>Sizes</h2>
                <section>${DiamondSizes()}</section>
            </section>
            <section class="choices--styles options">
                <h2>Styles</h2>
                <section>${JewelryStyles()}</section>
            </section>
        </article>
        <section class="choices--types">
            ${TypeSelector()}
        </section>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            <section>${Orders()}</section>
        </article>
    `
}

