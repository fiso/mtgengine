"use strict";
const Constants = require ("../../../Constants");
const TerritorialGorgerBase = require("../setKLD/TerritorialGorger");

class TerritorialGorger extends TerritorialGorgerBase {
  constructor (game) {
    super(game, "Territorial Gorger", "Kaladesh Promos", "PKLD");
  }
}

module.exports = TerritorialGorger;
