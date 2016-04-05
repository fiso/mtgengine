"use strict";
const Constants = require ("../../../Constants");
const GaeasTouchBase = require("../setME3/GaeasTouch");

class GaeasTouch extends GaeasTouchBase {
  constructor(game) {
    super(game, "Gaea's Touch", "The Dark", "DRK");
  }
}

module.exports = GaeasTouch;
