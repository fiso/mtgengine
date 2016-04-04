"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeightenedAwareness extends Card {
  constructor(game) {
    super(game, "Heightened Awareness", "Prophecy", "PCY");
  }
}

module.exports = HeightenedAwareness;
