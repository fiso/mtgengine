"use strict";
const Constants = require ("../../../Constants");
const BalefulStrixBase = require("../setC13/BalefulStrix");

class BalefulStrix extends BalefulStrixBase {
  constructor(game) {
    super(game, "Baleful Strix", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BalefulStrix;
