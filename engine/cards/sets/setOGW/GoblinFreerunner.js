"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinFreerunner extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Freerunner", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GoblinFreerunner;
