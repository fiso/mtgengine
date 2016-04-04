"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WellofLife extends Card {
  constructor(game) {
    super(game, "Well of Life", "Prophecy", "PCY");
  }
}

module.exports = WellofLife;
