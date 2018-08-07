"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagusoftheWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Magus of the Will", "You Make the Cube", "PZ2");
  }
}

module.exports = MagusoftheWill;
