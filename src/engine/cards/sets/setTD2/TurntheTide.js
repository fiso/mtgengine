"use strict";
const Constants = require ("../../../Constants");
const TurntheTideBase = require("../setCNS/TurntheTide");

class TurntheTide extends TurntheTideBase {
  constructor (game) {
    super(game, "Turn the Tide", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = TurntheTide;
