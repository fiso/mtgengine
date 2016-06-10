"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaAxe extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Axe", "Beatdown Box Set", "BTD");
  }
}

module.exports = LavaAxe;
