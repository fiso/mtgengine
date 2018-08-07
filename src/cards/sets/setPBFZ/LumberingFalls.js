"use strict";
const Constants = require ("../../../Constants");
const LumberingFallsBase = require("../setBFZ/LumberingFalls");

class LumberingFalls extends LumberingFallsBase {
  constructor (game) {
    super(game, "Lumbering Falls", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = LumberingFalls;
