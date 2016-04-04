"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DryadSophisticate extends Card {
  constructor(game) {
    super(game, "Dryad Sophisticate", "Guildpact", "GPT");
  }
}

module.exports = DryadSophisticate;
