"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PossessedPortal extends Card {
  constructor(game) {
    super(game, "Possessed Portal", "Fifth Dawn", "5DN");
  }
}

module.exports = PossessedPortal;
