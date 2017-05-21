var createKDTree = require("static-kdtree")
var fs = require('fs');
var distance = require('euclidean-distance')
var math = require('mathjs');


////IMPORT TXT FILE AND TO ARRAY////
var pointCollection = 'problem_big.txt'
var openArray = fs.readFileSync(pointCollection).toString().split('\n');
var numberOfPoints = openArray.length - 1
var formattedArray = [ ]
/////////////////////

////TURN ARRAY TO AN ARRAY OF ARRAYS OF ONLY X,Y COORDS////
for (i=0; i < numberOfPoints; i++) {
  eachPoint = openArray[i].split(" ")
  eachPoint.shift()

  formattedArray.push(eachPoint) 
}
/////////////////////


///////MAKE KD TREE, LOOP THROUGH THE ARRAY OF COORDS, CALCULATE DISTANCE BETWEEN POINT AND NEAREST OTHER, PUSH ALL TO AN ARRAY/////// 

var tree = createKDTree(formattedArray)
var distancesArray = []

for (i=0; i < tree.length; i++) {
  var nearestNeighbour = (tree.knn(formattedArray[i],2))

  var pointX = formattedArray[i]
  var pointY = formattedArray[nearestNeighbour[1]]

  distancesArray.push(distance(pointX, pointY))
}
/////////////////////


/////FIND INDEX OF THE GREATEST DISTANCE IN THE ARRAY, DISPLAY TO TERMINAL/////
var mostIsolated = distancesArray.indexOf(Math.max.apply(Math, distancesArray))
var mostIsolatedFeature = openArray[mostIsolated].split(" ")[0]

console.log("\nThe Most Isolated Feature Is:\n\n", mostIsolatedFeature)
/////////////////////



//////IMPROVE PERFORMANCE///////
tree.dispose()
/////////////////////
