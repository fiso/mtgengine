"use strict";
const Constants = require ("../../../Constants");
const TrevasRuinsBase = require("../setTD0/TrevasRuins");

class TrevasRuins extends TrevasRuinsBase {
  constructor (game) {
    super(game, "Treva's Ruins", "Planeshift", "PLS");
  }
}

module.exports = TrevasRuins;
