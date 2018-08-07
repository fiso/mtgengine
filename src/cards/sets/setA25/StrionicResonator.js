"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrionicResonator extends UnimplementedCard {
  constructor (game) {
    super(game, "Strionic Resonator", "Masters 25", "A25");
  }
}

module.exports = StrionicResonator;
