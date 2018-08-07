"use strict";
const Constants = require ("../../../Constants");
const DocentofPerfectionFinalIterationBase = require("../setEMN/DocentofPerfectionFinalIteration");

class DocentofPerfectionFinalIteration extends DocentofPerfectionFinalIterationBase {
  constructor (game) {
    super(game, "Docent of Perfection // Final Iteration", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = DocentofPerfectionFinalIteration;
