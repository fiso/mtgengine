"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MageilVec extends UnimplementedCard {
  constructor (game) {
    super(game, "Mage il-Vec", "Exodus", "EXO");
  }
}

module.exports = MageilVec;
