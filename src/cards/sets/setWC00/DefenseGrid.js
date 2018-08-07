"use strict";
const Constants = require ("../../../Constants");
const DefenseGridBase = require("../setMPS/DefenseGrid");

class DefenseGrid extends DefenseGridBase {
  constructor (game) {
    super(game, "Defense Grid", "World Championship Decks 2000", "WC00");
  }
}

module.exports = DefenseGrid;
