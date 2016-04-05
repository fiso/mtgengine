"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineVerdict extends UnimplementedCard {
  constructor(game) {
    super(game, "Divine Verdict", "Magic 2010", "M10");
  }
}

module.exports = DivineVerdict;
