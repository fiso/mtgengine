"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiptoPieces extends UnimplementedCard {
  constructor (game) {
    super(game, "Rip to Pieces", "Defeat a God", "TDAG");
  }
}

module.exports = RiptoPieces;
