"use strict";
const Constants = require ("../../../Constants");
const AvalancheRidersBase = require("../setTSB/AvalancheRiders");

class AvalancheRiders extends AvalancheRidersBase {
  constructor (game) {
    super(game, "Avalanche Riders", "World Championship Decks 1999", "WC99");
  }
}

module.exports = AvalancheRiders;
