"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LlanowarVanguard extends Card {
  constructor(game) {
    super(game, "Llanowar Vanguard", "Invasion", "INV");
  }
}

module.exports = LlanowarVanguard;
