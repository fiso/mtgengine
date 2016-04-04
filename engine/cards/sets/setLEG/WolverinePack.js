"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WolverinePackBase = require("../set5ED/WolverinePack.js");

class WolverinePack extends WolverinePackBase {
  constructor(game) {
    super(game, "Wolverine Pack", "Legends", "LEG");
  }
}

module.exports = WolverinePack;
