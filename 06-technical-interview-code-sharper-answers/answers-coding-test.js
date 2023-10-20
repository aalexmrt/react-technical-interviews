// Answer 1
function evaluate(unknown, k) {
  if (unknown === 'x') return k
  const known = `${k}`
  if (unknown.length !== known.length) return null
  for (let i in known) {
    if (known[i] !== unknown[i]) return known[i]
  }
  return null
}
const Oposite = {
  '+': (a, b) => {
    return a - b
  },
  '-': (a, b) => {
    return a + b
  },
  '*': (a, b) => {
    return a / b
  },
  '/': (a, b) => {
    return a * b
  },
}
const OnWard = {
  '+': (a, b) => {
    return a - b
  },
  '-': (a, b) => {
    return b - a
  },
  '*': (a, b) => {
    return a / b
  },
  '/': (a, b) => {
    return b / a
  },
}
const Normal = {
  '+': (a, b) => {
    return a + b
  },
  '-': (a, b) => {
    return b - a
  },
  '*': (a, b) => {
    return a * b
  },
  '/': (a, b) => {
    return a / b
  },
}
function MissingDigit(str) {
  // code goes here
  const blocks = str.split(' ')
  if (blocks[0].includes('x')) {
    return evaluate(
      blocks[0],
      Oposite[blocks[1]](parseInt(blocks[4]), parseInt(blocks[2]))
    )
  }
  if (blocks[2].includes('x')) {
    return evaluate(
      blocks[2],
      OnWard[blocks[1]](parseInt(blocks[4]), parseInt(blocks[0]))
    )
  }

  return evaluate(
    blocks[1],
    Normal[blocks[1]](parseInt(blocks[0]), parseInt(blocks[2]))
  )
}

// // keep this function call here
// console.log(MissingDigit(readline()))
// let equation = '1x0 * 12 = 1200'
// console.log(MissingDigit(equation))

// answer 2
function ASCIIConversion(str) {
  // code goes here
  let answer = ''

  for (let i in str) {
    if (str[i].match(/\s/g)) {
      answer += str[i]
    } else {
      answer += str[i].charCodeAt(0)
    }
  }

  return answer
}

// keep this function call here

const string = 'abc **'
console.log(ASCIIConversion(string))
