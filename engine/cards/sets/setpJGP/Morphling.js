"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Morphling extends UnimplementedCard {
  constructor(game) {
    super(game, "Morphling", "Judge Gift Program", "pJGP");
  }
}

module.exports = Morphling;
