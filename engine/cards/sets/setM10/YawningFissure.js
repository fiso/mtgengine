"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YawningFissure extends Card {
  constructor(game) {
    super(game, "Yawning Fissure", "Magic 2010", "M10");
  }
}

module.exports = YawningFissure;
