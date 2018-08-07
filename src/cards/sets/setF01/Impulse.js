"use strict";
const Constants = require ("../../../Constants");
const ImpulseBase = require("../setBBD/Impulse");

class Impulse extends ImpulseBase {
  constructor (game) {
    super(game, "Impulse", "Friday Night Magic 2001", "F01");
  }
}

module.exports = Impulse;
