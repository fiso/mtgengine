"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShuEliteInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Shu Elite Infantry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuEliteInfantry;
