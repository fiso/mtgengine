"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BraidsConjurerAdept extends UnimplementedCard {
  constructor(game) {
    super(game, "Braids, Conjurer Adept", "Planar Chaos", "PLC");
  }
}

module.exports = BraidsConjurerAdept;
