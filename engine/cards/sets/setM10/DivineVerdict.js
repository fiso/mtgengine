"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivineVerdict extends Card {
  constructor(game) {
    super(game, "Divine Verdict", "Magic 2010", "M10");
  }
}

module.exports = DivineVerdict;
