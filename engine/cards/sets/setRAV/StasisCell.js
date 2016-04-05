"use strict";
const Constants = require ("../../../Constants");
const StasisCellBase = require("../setCNS/StasisCell");

class StasisCell extends StasisCellBase {
  constructor(game) {
    super(game, "Stasis Cell", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = StasisCell;
