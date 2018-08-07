"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredFoundry extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Foundry", "Zendikar Expeditions", "EXP");
  }
}

module.exports = SacredFoundry;
