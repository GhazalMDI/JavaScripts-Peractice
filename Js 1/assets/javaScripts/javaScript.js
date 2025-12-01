// P1
let evens=[1, 4, 7, 2, 9, 12]
let odds = []
let even_new = []
for(let i=0;i<evens.length;i++){
    currentValue = evens[i]
    if (currentValue%2!==0){
        odds.push(currentValue)
        evens.splice(i,1)
    }
}
console.log(evens,odds)


// P2
let array2 = [5, 0, 2, 0, 8, 1]
for(let i=0;i<array2.length;i++){
    currentValue = array2[i]
    if(currentValue===0){
        array2.splice(i,1)
        array2.push(currentValue)
    }
}
console.log(array2)

// P3
const price_array = [50, 1200, 300, 80, 1500, 500]
let sum=0
for(let i=0;i<price_array.length;i++){
    currentPrice = price_array[i]
    if(currentPrice<100){
        price_array.splice(i,1)
        i--
        continue
    }
    if(currentPrice>=1000){
        let new_price = ((100-20)/100)*currentPrice
        price_array[i] = new_price
        currentPrice = new_price
    }
    sum+=currentPrice
}
console.log(price_array)
console.log(sum)


// P4
let array = [10, 20, 10, 30, 20, 40]
let arry_reverse = []

for(let i=0;i<array.length+arry_reverse.length;i++){
    let push_index=array.pop()
    arry_reverse.push(push_index)

}
console.log(arry_reverse)

// // P5
let array1 = [10, 20, 10, 30, 20, 40]
for(let i=0;i<array1.length;i++){
    currentValue = array1[i]
    for(let j=0;j<i;j++){
        if(currentValue==array1[j]){
            array1.shift(currentValue)
        }
    }
}
console.log(array1)
