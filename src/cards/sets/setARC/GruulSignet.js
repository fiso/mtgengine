"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruulSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Gruul Signet", "Archenemy", "ARC");
  }
}

module.exports = GruulSignet;
