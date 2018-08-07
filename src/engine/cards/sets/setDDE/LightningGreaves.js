"use strict";
const Constants = require ("../../../Constants");
const LightningGreavesBase = require("../setCM2/LightningGreaves");

class LightningGreaves extends LightningGreavesBase {
  constructor (game) {
    super(game, "Lightning Greaves", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = LightningGreaves;
