"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SomberwaldVigilanteBase = require("../setAVR/SomberwaldVigilante.js");

class SomberwaldVigilante extends SomberwaldVigilanteBase {
  constructor(game) {
    super(game, "Somberwald Vigilante", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SomberwaldVigilante;
