"use strict";
const Constants = require ("../../../Constants");
const SomberwaldVigilanteBase = require("../setAVR/SomberwaldVigilante");

class SomberwaldVigilante extends SomberwaldVigilanteBase {
  constructor (game) {
    super(game, "Somberwald Vigilante", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SomberwaldVigilante;
