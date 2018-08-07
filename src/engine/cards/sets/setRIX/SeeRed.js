"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeeRed extends UnimplementedCard {
  constructor (game) {
    super(game, "See Red", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SeeRed;
