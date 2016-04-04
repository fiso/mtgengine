"use strict";
const Constants = require ("../../../Constants");
const ViashinoRunnerBase = require("../set10E/ViashinoRunner");

class ViashinoRunner extends ViashinoRunnerBase {
  constructor(game) {
    super(game, "Viashino Runner", "Urza's Saga", "USG");
  }
}

module.exports = ViashinoRunner;
