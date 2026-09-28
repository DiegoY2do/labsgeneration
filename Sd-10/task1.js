export function costCalculator(cantidad) {
    let total = Number (cantidad);
    return (total + total * 0.01) + 3;
}