"use strict";
const Constants = require ("../../../Constants");
const DefenseGridBase = require("../setMPS/DefenseGrid");

class DefenseGrid extends DefenseGridBase {
  constructor (game) {
    super(game, "Defense Grid", "Ninth Edition", "9ED");
  }
}

module.exports = DefenseGrid;
