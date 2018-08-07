"use strict";
const Constants = require ("../../../Constants");
const ProgenitusBase = require("../setMMA/Progenitus");

class Progenitus extends ProgenitusBase {
  constructor (game) {
    super(game, "Progenitus", "Grand Prix Promos", "PGPX");
  }
}

module.exports = Progenitus;
