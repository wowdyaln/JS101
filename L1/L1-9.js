/*
請寫一個函式 finaAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。

findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]

findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]
*/
function findAllSmall(ary, n){
  let result = []
  ary.forEach( ele => {
    if(ele < n){
      result.push(ele)
    }
  })
  return result
}

export default findAllSmall