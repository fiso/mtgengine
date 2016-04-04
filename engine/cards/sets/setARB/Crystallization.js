"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crystallization extends UnimplementedCard {
  constructor(game) {
    super(game, "Crystallization", "Alara Reborn", "ARB");
  }
}

module.exports = Crystallization;
