"use strict";
const Constants = require ("../../../Constants");
const FailureComplyBase = require("../setAKH/FailureComply");

class FailureComply extends FailureComplyBase {
  constructor (game) {
    super(game, "Failure // Comply", "Amonkhet Promos", "PAKH");
  }
}

module.exports = FailureComply;
