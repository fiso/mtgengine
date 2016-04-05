"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinScouts extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Scouts", "Mirage", "MIR");
  }
}

module.exports = GoblinScouts;
