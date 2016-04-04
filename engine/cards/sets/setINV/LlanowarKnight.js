"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LlanowarKnight extends Card {
  constructor(game) {
    super(game, "Llanowar Knight", "Invasion", "INV");
  }
}

module.exports = LlanowarKnight;
