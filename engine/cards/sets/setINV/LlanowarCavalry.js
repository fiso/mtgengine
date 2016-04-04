"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LlanowarCavalry extends Card {
  constructor(game) {
    super(game, "Llanowar Cavalry", "Invasion", "INV");
  }
}

module.exports = LlanowarCavalry;
