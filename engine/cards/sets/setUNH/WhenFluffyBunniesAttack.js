"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhenFluffyBunniesAttack extends UnimplementedCard {
  constructor(game) {
    super(game, "When Fluffy Bunnies Attack", "Unhinged", "UNH");
  }
}

module.exports = WhenFluffyBunniesAttack;
