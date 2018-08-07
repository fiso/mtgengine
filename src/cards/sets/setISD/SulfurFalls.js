"use strict";
const Constants = require ("../../../Constants");
const SulfurFallsBase = require("../setDOM/SulfurFalls");

class SulfurFalls extends SulfurFallsBase {
  constructor (game) {
    super(game, "Sulfur Falls", "Innistrad", "ISD");
  }
}

module.exports = SulfurFalls;
