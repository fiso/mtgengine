"use strict";
const Constants = require ("../../../Constants");
const CabalStrongholdBase = require("../setDOM/CabalStronghold");

class CabalStronghold extends CabalStrongholdBase {
  constructor (game) {
    super(game, "Cabal Stronghold", "Dominaria Promos", "PDOM");
  }
}

module.exports = CabalStronghold;
