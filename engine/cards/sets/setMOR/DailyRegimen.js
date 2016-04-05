"use strict";
const Constants = require ("../../../Constants");
const DailyRegimenBase = require("../setDDL/DailyRegimen");

class DailyRegimen extends DailyRegimenBase {
  constructor(game) {
    super(game, "Daily Regimen", "Morningtide", "MOR");
  }
}

module.exports = DailyRegimen;
