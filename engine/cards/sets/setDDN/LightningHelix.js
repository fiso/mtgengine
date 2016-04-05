"use strict";
const Constants = require ("../../../Constants");
const LightningHelixBase = require("../setDDH/LightningHelix");

class LightningHelix extends LightningHelixBase {
  constructor(game) {
    super(game, "Lightning Helix", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = LightningHelix;
