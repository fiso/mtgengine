"use strict";
const Constants = require ("../../../Constants");
const ImpulseBase = require("../setBBD/Impulse");

class Impulse extends ImpulseBase {
  constructor (game) {
    super(game, "Impulse", "Beatdown Box Set", "BTD");
  }
}

module.exports = Impulse;
