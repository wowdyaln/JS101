/*
請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。

position("abcd") 正確回傳值：-1

position("AbcD") 正確回傳值：A 0

position("abCD") 正確回傳值：C 2
*/
import isUpperCase from './L1-5'
// function isUpperCase(str) {
//   return /[A-Z]/.test(str[0])
// }

function position(str){
  let result = []
  let i = -1
  str = str.split("")
  str.some( ele => {
    i++
    if (isUpperCase(ele) ){
      result.push(ele)
      result.push(i)
    }
    return isUpperCase(ele)
  })  
  return result
}

export default position