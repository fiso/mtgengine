"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWardriver extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Wardriver", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GoblinWardriver;
