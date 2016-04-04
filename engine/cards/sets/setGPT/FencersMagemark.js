"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FencersMagemark extends Card {
  constructor(game) {
    super(game, "Fencer's Magemark", "Guildpact", "GPT");
  }
}

module.exports = FencersMagemark;
