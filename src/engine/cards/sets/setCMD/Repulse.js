"use strict";
const Constants = require ("../../../Constants");
const RepulseBase = require("../setCN2/Repulse");

class Repulse extends RepulseBase {
  constructor (game) {
    super(game, "Repulse", "Commander 2011", "CMD");
  }
}

module.exports = Repulse;
