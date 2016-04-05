"use strict";
const Constants = require ("../../../Constants");
const DoublingSeasonBase = require("../setpJGP/DoublingSeason");

class DoublingSeason extends DoublingSeasonBase {
  constructor(game) {
    super(game, "Doubling Season", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DoublingSeason;
