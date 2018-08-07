"use strict";
const Constants = require ("../../../Constants");
const JugantheRisingStarBase = require("../setIMA/JugantheRisingStar");

class JugantheRisingStar extends JugantheRisingStarBase {
  constructor (game) {
    super(game, "Jugan, the Rising Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JugantheRisingStar;
