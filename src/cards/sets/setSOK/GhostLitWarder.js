"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostLitWarder extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost-Lit Warder", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GhostLitWarder;
