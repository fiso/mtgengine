"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClaimofErebos extends UnimplementedCard {
  constructor (game) {
    super(game, "Claim of Erebos", "Born of the Gods", "BNG");
  }
}

module.exports = ClaimofErebos;
