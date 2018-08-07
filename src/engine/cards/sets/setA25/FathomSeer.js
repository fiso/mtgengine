"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FathomSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Fathom Seer", "Masters 25", "A25");
  }
}

module.exports = FathomSeer;
