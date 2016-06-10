"use strict";
const Constants = require ("../../../Constants");
const ImpulseBase = require("../setBTD/Impulse");

class Impulse extends ImpulseBase {
  constructor (game) {
    super(game, "Impulse", "Friday Night Magic", "pFNM");
  }
}

module.exports = Impulse;
