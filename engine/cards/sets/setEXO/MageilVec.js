"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MageilVec extends Card {
  constructor(game) {
    super(game, "Mage il-Vec", "Exodus", "EXO");
  }
}

module.exports = MageilVec;
