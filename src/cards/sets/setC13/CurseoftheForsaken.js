"use strict";
const Constants = require ("../../../Constants");
const CurseoftheForsakenBase = require("../setCMA/CurseoftheForsaken");

class CurseoftheForsaken extends CurseoftheForsakenBase {
  constructor (game) {
    super(game, "Curse of the Forsaken", "Commander 2013", "C13");
  }
}

module.exports = CurseoftheForsaken;
