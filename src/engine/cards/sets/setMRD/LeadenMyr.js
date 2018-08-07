"use strict";
const Constants = require ("../../../Constants");
const LeadenMyrBase = require("../setSOM/LeadenMyr");

class LeadenMyr extends LeadenMyrBase {
  constructor (game) {
    super(game, "Leaden Myr", "Mirrodin", "MRD");
  }
}

module.exports = LeadenMyr;
