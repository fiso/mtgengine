"use strict";
const Constants = require ("../../../Constants");
const MiscalculationBase = require("../setWC00/Miscalculation");

class Miscalculation extends MiscalculationBase {
  constructor (game) {
    super(game, "Miscalculation", "Urza's Legacy", "ULG");
  }
}

module.exports = Miscalculation;
