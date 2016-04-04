"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JugantheRisingStarBase = require("../setCHK/JugantheRisingStar.js");

class JugantheRisingStar extends JugantheRisingStarBase {
  constructor(game) {
    super(game, "Jugan, the Rising Star", "Modern Masters", "MMA");
  }
}

module.exports = JugantheRisingStar;
