"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBerserker extends Card {
  constructor(game) {
    super(game, "Goblin Berserker", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinBerserker;
