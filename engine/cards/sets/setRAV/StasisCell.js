"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StasisCellBase = require("../setCNS/StasisCell.js");

class StasisCell extends StasisCellBase {
  constructor(game) {
    super(game, "Stasis Cell", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = StasisCell;
