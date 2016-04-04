"use strict";
const Constants = require ("../../../Constants");
const AcidRainBase = require("../setLEG/AcidRain");

class AcidRain extends AcidRainBase {
  constructor(game) {
    super(game, "Acid Rain", "Masters Edition IV", "ME4");
  }
}

module.exports = AcidRain;
