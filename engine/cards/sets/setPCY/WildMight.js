"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildMight extends Card {
  constructor(game) {
    super(game, "Wild Might", "Prophecy", "PCY");
  }
}

module.exports = WildMight;
