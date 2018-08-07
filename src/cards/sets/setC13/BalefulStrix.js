"use strict";
const Constants = require ("../../../Constants");
const BalefulStrixBase = require("../setE01/BalefulStrix");

class BalefulStrix extends BalefulStrixBase {
  constructor (game) {
    super(game, "Baleful Strix", "Commander 2013", "C13");
  }
}

module.exports = BalefulStrix;
