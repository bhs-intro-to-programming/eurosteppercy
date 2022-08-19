/*
 * This code is running in an environment with five functions defined:
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *    Draws a line from x1,y1 to x2,y2 using the give color. The fifth argument,
 *    lineWidth, is optional and defaults to 1.
 *
 *  drawCircle(x, y, r, color, lineWidth=1)
 *
 *    Draws a circle centered at x,y with radius r using the given color. The
 *    fith argument, lineWidth, is optional and defaults to 1.
 *
 *  drawRect(x, y, width, height, color, lineWidth=1)
 *
 *    Draws a rectangle starting at x,y with the given width, height, and color.
 *    Positive widths go to the right and negative to the left; positive heights
 *    go down and negative heights go up. The sixth argument, lineWidth, is
 *    optional and defaults to 1.
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *    Draws a filled rectangle starting at x,y with the given width, height, and
 *    color. Positive widths go to the right and negative to the left; positive
 *    heights go down and negative heights go up.
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *    Draws a filled circle centered at x,y with radius r using the given color.
 *
 * There are also a couple variables that might be useful:
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 */

//drawLine(100, 0, width/150, height, 'red')
//drawLine(0, 0, width, height, 'pink')
//drawLine(0, 600, width, height/200, 'green')

drawCircle(width/2, height/2, 250, 'blue');

//drawRect(50, 50, 60, 40, 'black');

drawFilledCircle(width - 100, height - 400, 99, 'white');
drawFilledCircle(width - 400, height - 400, 99, 'white');
drawFilledRect(5, height / 400, 450, 150, 'cyan');
drawFilledCircle(width - 400, height - 400, 10, 'black');
drawFilledCircle(width - 100, height - 400, 10, 'black');