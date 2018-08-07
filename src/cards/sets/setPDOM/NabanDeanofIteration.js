"use strict";
const Constants = require ("../../../Constants");
const NabanDeanofIterationBase = require("../setDOM/NabanDeanofIteration");

class NabanDeanofIteration extends NabanDeanofIterationBase {
  constructor (game) {
    super(game, "Naban, Dean of Iteration", "Dominaria Promos", "PDOM");
  }
}

module.exports = NabanDeanofIteration;
