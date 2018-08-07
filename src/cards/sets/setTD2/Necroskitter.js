"use strict";
const Constants = require ("../../../Constants");
const NecroskitterBase = require("../setMM2/Necroskitter");

class Necroskitter extends NecroskitterBase {
  constructor (game) {
    super(game, "Necroskitter", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Necroskitter;
