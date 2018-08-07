"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostLitRaider extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost-Lit Raider", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GhostLitRaider;
