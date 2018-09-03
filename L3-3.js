/*
請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹

tree(1) 預期輸出：
*

tree(2) 預期輸出：
_*
***
_*
_*

tree(5) 預期輸出：
____*
___***
__*****
_*******
*********
____*
____*
____*
____*
____*


1. 分成上下兩部分，上面樹冠，下面樹幹
2. 每層樹冠 = 空白 + 樹葉
*/

function space(n){
  let space = ""
  for (let i=1; i < n; i++){
    space += " "
  }
  return space
}


function leaf(n){
  let leaf = "*"
  for (let i=1; i < n; i++){
    leaf += "**"
  }
  return leaf
}


function printTrunk(n){
  let output = ""
  for(let i = 1; i < n; i++){
    output += " "
  }
  output += "*\n"

  for (let k=0; k < n; k++){
    console.log(output);
  }
}


function tree(n){
  let upper = ""
  for (let i = 0; i < n; i++){
    upper = space(n-i) + leaf(i+1)
    console.log(upper);
  }
  printTrunk(n)
}


tree(5)
tree(10)