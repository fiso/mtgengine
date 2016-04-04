"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueFiend extends Card {
  constructor(game) {
    super(game, "Plague Fiend", "Prophecy", "PCY");
  }
}

module.exports = PlagueFiend;
