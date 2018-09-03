function space(n) {
  let space = ""
  for (let i = 1; i < n; i++) {
    space += "_"
  }
  // console.log(space);
  return space
}

function leaf(n) {
  let leaf = "*"
  for (let i = 1; i < n; i++) {
    leaf += "**"
  }
  // console.log(leaf);
  return leaf
}

function printLowAll(n) {
  let output = ""
  for (let i = 1; i < n; i++) {
    output += "_"
  }
  output += "*\n"

  for (let k = 0; k < n; k++) {
    console.log(output);
  }
}

function tree(n) {
  let upper = ""
  for (let i = 0; i < n; i++) {
    upper = space(n - i) + leaf(i + 1)
    console.log(upper);
  }
  printLowAll(n)
}