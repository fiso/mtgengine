"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DefenseGridBase = require("../set8ED/DefenseGrid.js");

class DefenseGrid extends DefenseGridBase {
  constructor(game) {
    super(game, "Defense Grid", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenseGrid;
