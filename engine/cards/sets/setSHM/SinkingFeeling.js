"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SinkingFeeling extends Card {
  constructor(game) {
    super(game, "Sinking Feeling", "Shadowmoor", "SHM");
  }
}

module.exports = SinkingFeeling;
