"use strict";
const Constants = require ("../../../Constants");
const NeverReturnBase = require("../setAKH/NeverReturn");

class NeverReturn extends NeverReturnBase {
  constructor (game) {
    super(game, "Never // Return", "Amonkhet Promos", "PAKH");
  }
}

module.exports = NeverReturn;
