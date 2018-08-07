"use strict";
const Constants = require ("../../../Constants");
const SulfurFallsBase = require("../setDOM/SulfurFalls");

class SulfurFalls extends SulfurFallsBase {
  constructor (game) {
    super(game, "Sulfur Falls", "Dominaria Promos", "PDOM");
  }
}

module.exports = SulfurFalls;
