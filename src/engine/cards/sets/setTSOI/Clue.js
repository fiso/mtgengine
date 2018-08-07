"use strict";
const Constants = require ("../../../Constants");
const ClueBase = require("../setTC18/Clue");

class Clue extends ClueBase {
  constructor (game) {
    super(game, "Clue", "Shadows over Innistrad Tokens", "TSOI");
  }
}

module.exports = Clue;
