"use strict";
const Constants = require ("../../../Constants");
const DroolingGroodionBase = require("../setMM2/DroolingGroodion");

class DroolingGroodion extends DroolingGroodionBase {
  constructor (game) {
    super(game, "Drooling Groodion", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = DroolingGroodion;
