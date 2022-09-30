arr1= [1,2,3,4,5]
arr2 = [1,2,3,4,5]

function identiska(arr1,arr2) {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
          result = arr2.indexOf(arr1[i]) !== -1;
      
          if (result === false) {
            break;
          }
        }
      }

    console.log(result)

}

identiska(arr1,arr2)
