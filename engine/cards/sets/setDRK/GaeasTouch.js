"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaeasTouchBase = require("../setME3/GaeasTouch.js");

class GaeasTouch extends GaeasTouchBase {
  constructor(game) {
    super(game, "Gaea's Touch", "The Dark", "DRK");
  }
}

module.exports = GaeasTouch;
