"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWarStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin War Strike", "Scourge", "SCG");
  }
}

module.exports = GoblinWarStrike;
