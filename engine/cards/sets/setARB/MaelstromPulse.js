"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MaelstromPulse extends Card {
  constructor(game) {
    super(game, "Maelstrom Pulse", "Alara Reborn", "ARB");
  }
}

module.exports = MaelstromPulse;
