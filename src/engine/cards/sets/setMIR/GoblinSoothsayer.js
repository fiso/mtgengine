"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSoothsayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Soothsayer", "Mirage", "MIR");
  }
}

module.exports = GoblinSoothsayer;
