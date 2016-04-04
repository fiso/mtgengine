"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddenLore extends UnimplementedCard {
  constructor(game) {
    super(game, "Forbidden Lore", "Ice Age", "ICE");
  }
}

module.exports = ForbiddenLore;
