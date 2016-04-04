"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConjurersBan extends Card {
  constructor(game) {
    super(game, "Conjurer's Ban", "Guildpact", "GPT");
  }
}

module.exports = ConjurersBan;
