"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThallidGerminatorBase = require("../setMMA/ThallidGerminator.js");

class ThallidGerminator extends ThallidGerminatorBase {
  constructor(game) {
    super(game, "Thallid Germinator", "Time Spiral", "TSP");
  }
}

module.exports = ThallidGerminator;
