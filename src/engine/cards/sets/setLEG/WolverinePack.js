"use strict";
const Constants = require ("../../../Constants");
const WolverinePackBase = require("../set5ED/WolverinePack");

class WolverinePack extends WolverinePackBase {
  constructor (game) {
    super(game, "Wolverine Pack", "Legends", "LEG");
  }
}

module.exports = WolverinePack;
