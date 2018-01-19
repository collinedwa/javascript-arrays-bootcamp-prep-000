var chocolateBars = ["snickers", 
"hundred grand", 
"kitkat", 
"skittles"
  ]
var arrayAddition = "foo"

function addElementToBeginningOfArray(chocolateBars, arrayAddition){
  return [arrayAddition, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, arrayAddition){
  return chocolateBars.unshift(arrayAddition)
}

function addElementToEndOfArray(chocolateBars, arrayAddition){
  return [...chocolateBars, arrayAddition]
}

function destructivelyAddElementToEndOfArray(chocolateBars, arrayAddition){
  return chocolateBars.push(arrayAddition)
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift()
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return chocolateBars.pop()
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(-1)
}