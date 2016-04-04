"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CruelEdict extends Card {
  constructor(game) {
    super(game, "Cruel Edict", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = CruelEdict;
