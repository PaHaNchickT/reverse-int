module.exports = function reverse (n) {
    let out = ''
    if (n<0) {
        n = -n
    }
    n = String(n).split('')
    let index = n.length-1
    while (index>-1) {
        out=`${out}${n[index]}`
        index = index-1
    }
    return(Number(out))
}

// reverse(-425)