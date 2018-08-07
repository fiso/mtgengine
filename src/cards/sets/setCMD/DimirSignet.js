"use strict";
const Constants = require ("../../../Constants");
const DimirSignetBase = require("../setC18/DimirSignet");

class DimirSignet extends DimirSignetBase {
  constructor (game) {
    super(game, "Dimir Signet", "Commander 2011", "CMD");
  }
}

module.exports = DimirSignet;
