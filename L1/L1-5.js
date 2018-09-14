/*
請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。

isUpperCase("abcd") 正確回傳值：false

isUpperCase("Abcd") 正確回傳值：true

isUpperCase("ABCD") 正確回傳值：true

isUpperCase("aBCD") 正確回傳值：false
*/

function isUpperCase(str){
  return /[A-Z]/.test(str[0]
  )
}

export default isUpperCase