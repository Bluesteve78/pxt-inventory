//% color=#FF8000 icon="\uf187" block="Inventory"
namespace inventory {
    let items: string[] = []

    //% block="add item %item" blockGap=8
    export function addItem(item: string): void {
        items.push(item)
    }

    //% block="remove item %item"
    export function removeItem(item: string): void {
        const index = items.indexOf(item)
        if (index > -1) {
            items.removeAt(index)
        }
    }

    //% block="has item %item"
    export function hasItem(item: string): boolean {
        return items.indexOf(item) > -1
    }

    //% block="get inventory"
    export function getInventory(): string[] {
        return items
    }

    //% block="clear inventory"
    export function clearInventory(): void {
        items = []
    }
}
