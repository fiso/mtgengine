"use strict";
const Constants = require ("../../../Constants");
const ThallidShellDwellerBase = require("../setMMA/ThallidShellDweller");

class ThallidShellDweller extends ThallidShellDwellerBase {
  constructor (game) {
    super(game, "Thallid Shell-Dweller", "Time Spiral", "TSP");
  }
}

module.exports = ThallidShellDweller;
