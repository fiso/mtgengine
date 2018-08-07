"use strict";
const Constants = require ("../../../Constants");
const EternalWitnessBase = require("../setCM2/EternalWitness");

class EternalWitness extends EternalWitnessBase {
  constructor (game) {
    super(game, "Eternal Witness", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = EternalWitness;
