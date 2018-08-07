"use strict";
const Constants = require ("../../../Constants");
const DispossessBase = require("../setAKH/Dispossess");

class Dispossess extends DispossessBase {
  constructor (game) {
    super(game, "Dispossess", "Amonkhet Promos", "PAKH");
  }
}

module.exports = Dispossess;
