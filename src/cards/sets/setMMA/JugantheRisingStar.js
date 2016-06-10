"use strict";
const Constants = require ("../../../Constants");
const JugantheRisingStarBase = require("../setCHK/JugantheRisingStar");

class JugantheRisingStar extends JugantheRisingStarBase {
  constructor (game) {
    super(game, "Jugan, the Rising Star", "Modern Masters", "MMA");
  }
}

module.exports = JugantheRisingStar;
