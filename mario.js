
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");
    var count = 0
    var spaces = height - 1
    var hashes = 2
    var str = ""

    while (count < height){
      for (var number = 0; number <= spaces; number++)
        str = str + " ";
      for (var number = 0; number < hashes; number++)
        str = str + "#";
      console.log(str);
      spaces = spaces - 1;
      hashes = hashes + 1;
      str = "";
      count++;
    }

    // TODO
    // print that pyramid!

}
