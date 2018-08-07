"use strict";
const Constants = require ("../../../Constants");
const WasteNotBase = require("../setC16/WasteNot");

class WasteNot extends WasteNotBase {
  constructor (game) {
    super(game, "Waste Not", "Magic 2015", "M15");
  }
}

module.exports = WasteNot;
