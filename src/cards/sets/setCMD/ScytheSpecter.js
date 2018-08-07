"use strict";
const Constants = require ("../../../Constants");
const ScytheSpecterBase = require("../setCM2/ScytheSpecter");

class ScytheSpecter extends ScytheSpecterBase {
  constructor (game) {
    super(game, "Scythe Specter", "Commander 2011", "CMD");
  }
}

module.exports = ScytheSpecter;
