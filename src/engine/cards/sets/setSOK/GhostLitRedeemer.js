"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostLitRedeemer extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost-Lit Redeemer", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GhostLitRedeemer;
