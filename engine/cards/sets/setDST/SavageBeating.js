"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageBeating extends UnimplementedCard {
  constructor(game) {
    super(game, "Savage Beating", "Darksteel", "DST");
  }
}

module.exports = SavageBeating;
