"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PillarofWar extends Card {
  constructor(game) {
    super(game, "Pillar of War", "Born of the Gods", "BNG");
  }
}

module.exports = PillarofWar;
