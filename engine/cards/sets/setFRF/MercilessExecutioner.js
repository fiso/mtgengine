"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercilessExecutioner extends Card {
  constructor(game) {
    super(game, "Merciless Executioner", "Fate Reforged", "FRF");
  }
}

module.exports = MercilessExecutioner;
