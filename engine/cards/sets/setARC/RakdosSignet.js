"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakdosSignet extends Card {
  constructor(game) {
    super(game, "Rakdos Signet", "Archenemy", "ARC");
  }
}

module.exports = RakdosSignet;
