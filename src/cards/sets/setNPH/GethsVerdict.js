"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GethsVerdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Geth's Verdict", "New Phyrexia", "NPH");
  }
}

module.exports = GethsVerdict;
