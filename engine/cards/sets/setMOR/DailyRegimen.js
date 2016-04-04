"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DailyRegimenBase = require("../setDDL/DailyRegimen.js");

class DailyRegimen extends DailyRegimenBase {
  constructor(game) {
    super(game, "Daily Regimen", "Morningtide", "MOR");
  }
}

module.exports = DailyRegimen;
