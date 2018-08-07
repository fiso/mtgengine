"use strict";
const Constants = require ("../../../Constants");
const TumbleMagnetBase = require("../setMM2/TumbleMagnet");

class TumbleMagnet extends TumbleMagnetBase {
  constructor (game) {
    super(game, "Tumble Magnet", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TumbleMagnet;
