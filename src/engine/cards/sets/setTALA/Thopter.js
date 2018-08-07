"use strict";
const Constants = require ("../../../Constants");
const ThopterBase = require("../setTC18/Thopter");

class Thopter extends ThopterBase {
  constructor (game) {
    super(game, "Thopter", "Shards of Alara Tokens", "TALA");
  }
}

module.exports = Thopter;
