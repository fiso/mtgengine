"use strict";
const Constants = require ("../../../Constants");
const RepulseBase = require("../setDD3_JVC/Repulse");

class Repulse extends RepulseBase {
  constructor (game) {
    super(game, "Repulse", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Repulse;
