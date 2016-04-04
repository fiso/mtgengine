"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EternitySnare extends Card {
  constructor(game) {
    super(game, "Eternity Snare", "Born of the Gods", "BNG");
  }
}

module.exports = EternitySnare;
