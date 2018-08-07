"use strict";
const Constants = require ("../../../Constants");
const LichsMasteryBase = require("../setDOM/LichsMastery");

class LichsMastery extends LichsMasteryBase {
  constructor (game) {
    super(game, "Lich's Mastery", "Dominaria Promos", "PDOM");
  }
}

module.exports = LichsMastery;
