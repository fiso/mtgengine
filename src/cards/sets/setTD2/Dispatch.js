"use strict";
const Constants = require ("../../../Constants");
const DispatchBase = require("../setMM2/Dispatch");

class Dispatch extends DispatchBase {
  constructor (game) {
    super(game, "Dispatch", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Dispatch;
