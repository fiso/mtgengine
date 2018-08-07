"use strict";
const Constants = require ("../../../Constants");
const ImpulseBase = require("../setBBD/Impulse");

class Impulse extends ImpulseBase {
  constructor (game) {
    super(game, "Impulse", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = Impulse;
