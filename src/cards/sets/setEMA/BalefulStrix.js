"use strict";
const Constants = require ("../../../Constants");
const BalefulStrixBase = require("../setE01/BalefulStrix");

class BalefulStrix extends BalefulStrixBase {
  constructor (game) {
    super(game, "Baleful Strix", "Eternal Masters", "EMA");
  }
}

module.exports = BalefulStrix;
