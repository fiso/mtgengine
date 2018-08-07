"use strict";
const Constants = require ("../../../Constants");
const RepulseBase = require("../setCN2/Repulse");

class Repulse extends RepulseBase {
  constructor (game) {
    super(game, "Repulse", "Invasion", "INV");
  }
}

module.exports = Repulse;
