"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulSpike extends Card {
  constructor(game) {
    super(game, "Soul Spike", "Coldsnap", "CSP");
  }
}

module.exports = SoulSpike;
