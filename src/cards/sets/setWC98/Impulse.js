"use strict";
const Constants = require ("../../../Constants");
const ImpulseBase = require("../setBBD/Impulse");

class Impulse extends ImpulseBase {
  constructor (game) {
    super(game, "Impulse", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Impulse;
