"use strict";
const Constants = require ("../../../Constants");
const ThopterBase = require("../setTC18/Thopter");

class Thopter extends ThopterBase {
  constructor (game) {
    super(game, "Thopter", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = Thopter;
