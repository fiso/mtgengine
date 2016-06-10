"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelEdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Cruel Edict", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = CruelEdict;
