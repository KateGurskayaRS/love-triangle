
/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
 for (var i = 0; i < preferences.length; i++) {
   if (i != preferences[i]-1 && i == preferences[preferences[preferences[i]-1]-1]-1) 
   count++;
 }
 return count/3;
};
