"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WistfulThinking extends Card {
  constructor(game) {
    super(game, "Wistful Thinking", "Planar Chaos", "PLC");
  }
}

module.exports = WistfulThinking;
