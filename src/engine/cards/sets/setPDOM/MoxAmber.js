"use strict";
const Constants = require ("../../../Constants");
const MoxAmberBase = require("../setDOM/MoxAmber");

class MoxAmber extends MoxAmberBase {
  constructor (game) {
    super(game, "Mox Amber", "Dominaria Promos", "PDOM");
  }
}

module.exports = MoxAmber;
