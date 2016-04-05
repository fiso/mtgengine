"use strict";
const Constants = require ("../../../Constants");
const BalefulStrixBase = require("../setC13/BalefulStrix");

class BalefulStrix extends BalefulStrixBase {
  constructor(game) {
    super(game, "Baleful Strix", "Vintage Masters", "VMA");
  }
}

module.exports = BalefulStrix;
