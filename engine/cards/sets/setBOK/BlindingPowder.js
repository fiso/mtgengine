"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingPowder extends UnimplementedCard {
  constructor(game) {
    super(game, "Blinding Powder", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BlindingPowder;
