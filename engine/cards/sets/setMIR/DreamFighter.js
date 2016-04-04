"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamFighter extends Card {
  constructor(game) {
    super(game, "Dream Fighter", "Mirage", "MIR");
  }
}

module.exports = DreamFighter;
