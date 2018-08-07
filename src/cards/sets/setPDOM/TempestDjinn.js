"use strict";
const Constants = require ("../../../Constants");
const TempestDjinnBase = require("../setDOM/TempestDjinn");

class TempestDjinn extends TempestDjinnBase {
  constructor (game) {
    super(game, "Tempest Djinn", "Dominaria Promos", "PDOM");
  }
}

module.exports = TempestDjinn;
