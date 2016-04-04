"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KoboldTaskmaster extends Card {
  constructor(game) {
    super(game, "Kobold Taskmaster", "Legends", "LEG");
  }
}

module.exports = KoboldTaskmaster;
