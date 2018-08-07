"use strict";
const Constants = require ("../../../Constants");
const BalefulStrixBase = require("../setE01/BalefulStrix");

class BalefulStrix extends BalefulStrixBase {
  constructor (game) {
    super(game, "Baleful Strix", "Planechase 2012", "PC2");
  }
}

module.exports = BalefulStrix;
