"use strict";
const Constants = require ("../../../Constants");
const ThopterBase = require("../setTC18/Thopter");

class Thopter extends ThopterBase {
  constructor (game) {
    super(game, "Thopter", "Mirrodin Besieged Tokens", "TMBS");
  }
}

module.exports = Thopter;
