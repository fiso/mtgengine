"use strict";
const Constants = require ("../../../Constants");
const DimirSignetBase = require("../setC18/DimirSignet");

class DimirSignet extends DimirSignetBase {
  constructor (game) {
    super(game, "Dimir Signet", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DimirSignet;
