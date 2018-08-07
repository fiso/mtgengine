"use strict";
const Constants = require ("../../../Constants");
const MarduHeartPiercerBase = require("../setKTK/MarduHeartPiercer");

class MarduHeartPiercer extends MarduHeartPiercerBase {
  constructor (game) {
    super(game, "Mardu Heart-Piercer", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = MarduHeartPiercer;
