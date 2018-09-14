/*
練習一：排序
請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）

提示：如果你已經會找第 n 小的值了，試著把這個概念應用到這題上。

sort([ 6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]

sort([ 1, 2, 7 ,5]) 預期回傳值：[1, 2, 5, 7]

1。找到最小值，拿出來，並 push 到另一個 空array。
2。重複 step1 ，直到拿完所有數值。

*/
function takeMin(array) {
  let min = Math.min(...array)
  let index = array.indexOf(min)
  array.splice(index, 1)
  return min
}

function sort(ary){
  let ascendAry = []

  function ascend(ay){
    let minV = takeMin(ay)
    ascendAry.push(minV)
    if (ay.length !== 0){
      return ascend(ay)
    } else {
      return ascendAry
    }
  }

  return ascend(ary)
}


export default sort
