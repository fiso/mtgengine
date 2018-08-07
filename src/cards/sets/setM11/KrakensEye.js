"use strict";
const Constants = require ("../../../Constants");
const KrakensEyeBase = require("../setM12/KrakensEye");

class KrakensEye extends KrakensEyeBase {
  constructor (game) {
    super(game, "Kraken's Eye", "Magic 2011", "M11");
  }
}

module.exports = KrakensEye;
