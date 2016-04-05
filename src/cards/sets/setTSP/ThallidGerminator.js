"use strict";
const Constants = require ("../../../Constants");
const ThallidGerminatorBase = require("../setMMA/ThallidGerminator");

class ThallidGerminator extends ThallidGerminatorBase {
  constructor(game) {
    super(game, "Thallid Germinator", "Time Spiral", "TSP");
  }
}

module.exports = ThallidGerminator;
