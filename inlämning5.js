arr = [1,2,4,5]

function km_to_m(arr) {
    arr.forEach(element => {
        var meter = element / 3.6;
        console.log(meter+' meter')
    })
    
}

km_to_m(arr)