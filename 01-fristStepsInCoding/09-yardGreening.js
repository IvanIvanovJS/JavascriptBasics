function yardGreening(squereMeters){

    let singlePrice = Number(7.61)
    let priceForArea = Number (squereMeters * singlePrice);
    let discount = Number (0.18 * priceForArea);
    console.log (`The final price is: ${priceForArea - discount} lv.`)
    console.log (`The discount is: ${discount} lv.`)
    
}
yardGreening(550)