"use strict";
const Constants = require ("../../../Constants");
const DiabolicServitudeBase = require("../setCMA/DiabolicServitude");

class DiabolicServitude extends DiabolicServitudeBase {
  constructor (game) {
    super(game, "Diabolic Servitude", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = DiabolicServitude;
