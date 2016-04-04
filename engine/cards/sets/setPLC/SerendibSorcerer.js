"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerendibSorcerer extends Card {
  constructor(game) {
    super(game, "Serendib Sorcerer", "Planar Chaos", "PLC");
  }
}

module.exports = SerendibSorcerer;
