"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PainfulTruths extends UnimplementedCard {
  constructor(game) {
    super(game, "Painful Truths", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PainfulTruths;
