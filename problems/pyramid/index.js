// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//this is slightly more challanging version of steps. However we can view it similarly.
//we will build it middle out. This will allow us to only focus in one direction.
//so we know that he ammount of space needed on the right side is n-i, the total minus what we alreaddy have
//the slightly more complicated is how many # we need, which can be found using (i-1)
//This will calculate how many # and how many spaces we need to right of our original '#'
//We can add the spaces to both sides and '# to both sides, but since the # are in the middle we can simply
//multiply (i-1)*2 to get the total number of # and add that to the center
function pyramid(n) {
    for(let i = 1; i<=n; i++){
        let spaceNeeded = n-i;
        let extraX = '#'.repeat((i-1)*2);
        let str = ' '.repeat(spaceNeeded) + '#' + extraX + ' '.repeat(spaceNeeded);
        console.log(str);
    }
}

module.exports = pyramid;