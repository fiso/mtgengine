"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenomousBreath extends UnimplementedCard {
  constructor (game) {
    super(game, "Venomous Breath", "Ice Age", "ICE");
  }
}

module.exports = VenomousBreath;
