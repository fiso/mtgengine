"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldevi Golem", "Ice Age", "ICE");
  }
}

module.exports = SoldeviGolem;
