"use strict";
const Constants = require ("../../../Constants");
const SilentArbiterBase = require("../setCNS/SilentArbiter");

class SilentArbiter extends SilentArbiterBase {
  constructor (game) {
    super(game, "Silent Arbiter", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SilentArbiter;
