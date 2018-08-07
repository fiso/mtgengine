"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineVerdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Verdict", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DivineVerdict;
