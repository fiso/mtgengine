"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalseCure extends Card {
  constructor(game) {
    super(game, "False Cure", "Onslaught", "ONS");
  }
}

module.exports = FalseCure;
