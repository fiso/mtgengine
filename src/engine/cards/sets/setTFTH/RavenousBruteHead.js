"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousBruteHead extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Brute Head", "Face the Hydra", "TFTH");
  }
}

module.exports = RavenousBruteHead;
