const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) == true) {
    let teamNames = members.filter(function(m) {return typeof m === 'string'}).map(item => item.trim());
    let newNames = teamNames.map(index => index[0].toUpperCase()).sort().join('');
    return newNames;
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
