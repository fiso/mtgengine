"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameWave extends Card {
  constructor(game) {
    super(game, "Flame Wave", "Ninth Edition", "9ED");
  }
}

module.exports = FlameWave;
