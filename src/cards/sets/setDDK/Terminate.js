"use strict";
const Constants = require ("../../../Constants");
const TerminateBase = require("../setC17/Terminate");

class Terminate extends TerminateBase {
  constructor (game) {
    super(game, "Terminate", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Terminate;
