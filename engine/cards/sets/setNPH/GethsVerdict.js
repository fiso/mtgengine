"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GethsVerdict extends Card {
  constructor(game) {
    super(game, "Geth's Verdict", "New Phyrexia", "NPH");
  }
}

module.exports = GethsVerdict;
