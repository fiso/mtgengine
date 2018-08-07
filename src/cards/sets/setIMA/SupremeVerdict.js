"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupremeVerdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Supreme Verdict", "Iconic Masters", "IMA");
  }
}

module.exports = SupremeVerdict;
