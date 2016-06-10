"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Guide", "Grand Prix", "pGPX");
  }
}

module.exports = GoblinGuide;
