"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThallidShellDwellerBase = require("../setMMA/ThallidShellDweller.js");

class ThallidShellDweller extends ThallidShellDwellerBase {
  constructor(game) {
    super(game, "Thallid Shell-Dweller", "Time Spiral", "TSP");
  }
}

module.exports = ThallidShellDweller;
