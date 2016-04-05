"use strict";
const Constants = require ("../../../Constants");
const DefenseGridBase = require("../set8ED/DefenseGrid");

class DefenseGrid extends DefenseGridBase {
  constructor(game) {
    super(game, "Defense Grid", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenseGrid;
