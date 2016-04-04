"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinArchaeologist extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Archaeologist", "Darksteel", "DST");
  }
}

module.exports = GoblinArchaeologist;
