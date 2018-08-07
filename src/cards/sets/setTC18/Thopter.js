"use strict";
const Constants = require ("../../../Constants");
const ThopterBase = require("../setTC18/Thopter");

class Thopter extends ThopterBase {
  constructor (game) {
    super(game, "Thopter", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Thopter;
