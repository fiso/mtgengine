"use strict";
const Constants = require ("../../../Constants");
const DimirSignetBase = require("../setC18/DimirSignet");

class DimirSignet extends DimirSignetBase {
  constructor (game) {
    super(game, "Dimir Signet", "Modern Masters 2017", "MM3");
  }
}

module.exports = DimirSignet;
