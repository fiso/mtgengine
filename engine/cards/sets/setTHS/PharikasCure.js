"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PharikasCure extends UnimplementedCard {
  constructor(game) {
    super(game, "Pharika's Cure", "Theros", "THS");
  }
}

module.exports = PharikasCure;
