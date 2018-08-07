"use strict";
const Constants = require ("../../../Constants");
const ThopterBase = require("../setTC18/Thopter");

class Thopter extends ThopterBase {
  constructor (game) {
    super(game, "Thopter", "Core Set 2019 Tokens", "TM19");
  }
}

module.exports = Thopter;
