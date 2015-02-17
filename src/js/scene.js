/**
 * Created by Dmitri on 2/17/2015.
 */
var Raphael = require('raphael');

var SURFACE_ID = 'scene';

function SceenView() {
    console.log('Initializing Raphael');

    this.sceen = Raphael(SURFACE_ID, 600, 400);
    this.sceen.canvas.style.backgroundColor = '#000';
}

module.exports = SceenView;