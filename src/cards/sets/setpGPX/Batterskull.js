"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Batterskull extends UnimplementedCard {
  constructor (game) {
    super(game, "Batterskull", "Grand Prix", "pGPX");
  }
}

module.exports = Batterskull;
