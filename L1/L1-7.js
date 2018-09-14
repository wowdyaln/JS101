/*
請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。

findSmallCount([1, 2, 3], 2) 預期回傳值：1

findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值：0

findSmallCount([1, 2, 3, 4], 100) 預期回傳值：4
*/

function findSmallCount(ary, n){
  let result = 
    ary.filter( ele => {
      return ele < n
    })
  return result.length  
}

export default findSmallCount