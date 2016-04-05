"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMachinist extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Machinist", "Onslaught", "ONS");
  }
}

module.exports = GoblinMachinist;
