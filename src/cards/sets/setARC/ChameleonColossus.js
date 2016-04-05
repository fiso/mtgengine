"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChameleonColossus extends UnimplementedCard {
  constructor(game) {
    super(game, "Chameleon Colossus", "Archenemy", "ARC");
  }
}

module.exports = ChameleonColossus;
