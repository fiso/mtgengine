"use strict";
const Constants = require ("../../../Constants");
const AcidRainBase = require("../setME4/AcidRain");

class AcidRain extends AcidRainBase {
  constructor (game) {
    super(game, "Acid Rain", "Legends", "LEG");
  }
}

module.exports = AcidRain;
