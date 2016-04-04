"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhisperwoodElemental extends Card {
  constructor(game) {
    super(game, "Whisperwood Elemental", "Fate Reforged", "FRF");
  }
}

module.exports = WhisperwoodElemental;
