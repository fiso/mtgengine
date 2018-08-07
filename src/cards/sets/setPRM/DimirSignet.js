"use strict";
const Constants = require ("../../../Constants");
const DimirSignetBase = require("../setC18/DimirSignet");

class DimirSignet extends DimirSignetBase {
  constructor (game) {
    super(game, "Dimir Signet", "Magic Online Promos", "PRM");
  }
}

module.exports = DimirSignet;
