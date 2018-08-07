"use strict";
const Constants = require ("../../../Constants");
const BadRiverBase = require("../setVMA/BadRiver");

class BadRiver extends BadRiverBase {
  constructor (game) {
    super(game, "Bad River", "Mirage", "MIR");
  }
}

module.exports = BadRiver;
