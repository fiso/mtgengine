"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSappers extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Sappers", "Ice Age", "ICE");
  }
}

module.exports = GoblinSappers;
