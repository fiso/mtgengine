"use strict";
const Constants = require ("../../../Constants");
const TolarianScholarBase = require("../setM19/TolarianScholar");

class TolarianScholar extends TolarianScholarBase {
  constructor (game) {
    super(game, "Tolarian Scholar", "Dominaria", "DOM");
  }
}

module.exports = TolarianScholar;
