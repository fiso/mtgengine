"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MogissChosen extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogis's Chosen", "Battle the Horde", "TBTH");
  }
}

module.exports = MogissChosen;
