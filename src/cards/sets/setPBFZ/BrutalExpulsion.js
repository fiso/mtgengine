"use strict";
const Constants = require ("../../../Constants");
const BrutalExpulsionBase = require("../setBFZ/BrutalExpulsion");

class BrutalExpulsion extends BrutalExpulsionBase {
  constructor (game) {
    super(game, "Brutal Expulsion", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = BrutalExpulsion;
