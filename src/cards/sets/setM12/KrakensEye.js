"use strict";
const Constants = require ("../../../Constants");
const KrakensEyeBase = require("../setDST/KrakensEye");

class KrakensEye extends KrakensEyeBase {
  constructor(game) {
    super(game, "Kraken's Eye", "Magic 2012", "M12");
  }
}

module.exports = KrakensEye;
