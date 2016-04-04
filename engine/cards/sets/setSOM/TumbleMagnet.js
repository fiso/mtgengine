"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TumbleMagnetBase = require("../setMM2/TumbleMagnet.js");

class TumbleMagnet extends TumbleMagnetBase {
  constructor(game) {
    super(game, "Tumble Magnet", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TumbleMagnet;
