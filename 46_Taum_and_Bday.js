function taumBday(b, w, bc, wc, z) {
    var costOfGift = BigInt(0)
    console.log(typeof(costOfGift))

    var b = BigInt(b)
    var w = BigInt(w)
    var bc = BigInt(bc)
    var wc = BigInt(wc)
    var z = BigInt(z)

    if (z <= (bc - wc)) { 
        costOfGift = w * wc 
        wc = wc + z   
        costOfGift += b * wc
    } else if (z <= (wc - bc)) {
        costOfGift = b * bc     
        bc = bc + z   
        costOfGift += w * bc
    } else {
        costOfGift = (w * wc) + (b * bc)
    }

    return costOfGift
}

var b = 623669229
var w = 435417504
var bc = 266946955
var wc = 600641444
var z = 515391879
console.log(taumBday(b, w, bc, wc, z))
//428016399954183471