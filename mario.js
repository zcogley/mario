
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */


function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!" + height);

    // TODO 3
    // figure out the height the user typed (replace the "5" below)
    var heightStrSelector = document.querySelector("#height");
      heightStr = heightStrSelector.value

    // here we convert the string to an int
    height = parseInt(heightStr);

    // TODO 2
    //draw the pyramid
    drawPyramid(height);

}


// TODO 1
// hook up the button's click event to our determineHeightAndThenDrawPyramid function
//done in mario.html

/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     // TODO 4
     // before drawing, clear the old content
     document.getElementById("pyramid").innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
