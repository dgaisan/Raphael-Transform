/**
 * Created by Dmitri on 2/17/2015.
 */
var Raphael = require('raphael');

var SURFACE_ID = 'sceen';

function SceenView() {
    this.sceen = Raphael.paper(SURFACE_ID, 600, 400);
    this.sceen.canvas.style.backgroundColor = '#000';
}



module.exports = SceenView;