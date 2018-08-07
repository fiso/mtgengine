"use strict";
const Constants = require ("../../../Constants");
const KrakensEyeBase = require("../setM12/KrakensEye");

class KrakensEye extends KrakensEyeBase {
  constructor (game) {
    super(game, "Kraken's Eye", "Magic 2010", "M10");
  }
}

module.exports = KrakensEye;
