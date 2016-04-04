"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JugantheRisingStar extends Card {
  constructor(game) {
    super(game, "Jugan, the Rising Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JugantheRisingStar;
