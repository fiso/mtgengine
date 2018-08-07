"use strict";
const Constants = require ("../../../Constants");
const MindsDesireBase = require("../setDDS/MindsDesire");

class MindsDesire extends MindsDesireBase {
  constructor (game) {
    super(game, "Mind's Desire", "Scourge", "SCG");
  }
}

module.exports = MindsDesire;
