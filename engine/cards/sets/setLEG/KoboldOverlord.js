"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KoboldOverlord extends Card {
  constructor(game) {
    super(game, "Kobold Overlord", "Legends", "LEG");
  }
}

module.exports = KoboldOverlord;
