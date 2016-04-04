"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormwatchEagle extends Card {
  constructor(game) {
    super(game, "Stormwatch Eagle", "Prophecy", "PCY");
  }
}

module.exports = StormwatchEagle;
