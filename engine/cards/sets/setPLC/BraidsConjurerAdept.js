"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BraidsConjurerAdept extends Card {
  constructor(game) {
    super(game, "Braids, Conjurer Adept", "Planar Chaos", "PLC");
  }
}

module.exports = BraidsConjurerAdept;
