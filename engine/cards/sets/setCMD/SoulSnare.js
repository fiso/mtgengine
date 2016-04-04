"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulSnare extends Card {
  constructor(game) {
    super(game, "Soul Snare", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SoulSnare;
