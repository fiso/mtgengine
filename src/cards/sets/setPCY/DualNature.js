"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DualNature extends UnimplementedCard {
  constructor(game) {
    super(game, "Dual Nature", "Prophecy", "PCY");
  }
}

module.exports = DualNature;
