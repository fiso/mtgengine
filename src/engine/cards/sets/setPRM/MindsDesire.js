"use strict";
const Constants = require ("../../../Constants");
const MindsDesireBase = require("../setDDS/MindsDesire");

class MindsDesire extends MindsDesireBase {
  constructor (game) {
    super(game, "Mind's Desire", "Magic Online Promos", "PRM");
  }
}

module.exports = MindsDesire;
