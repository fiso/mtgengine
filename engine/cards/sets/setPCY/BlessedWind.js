"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlessedWind extends Card {
  constructor(game) {
    super(game, "Blessed Wind", "Prophecy", "PCY");
  }
}

module.exports = BlessedWind;
