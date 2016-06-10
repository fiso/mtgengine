"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JugantheRisingStar extends UnimplementedCard {
  constructor (game) {
    super(game, "Jugan, the Rising Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JugantheRisingStar;
