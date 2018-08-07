"use strict";
const Constants = require ("../../../Constants");
const LhurgoyfBase = require("../setCM2/Lhurgoyf");

class Lhurgoyf extends LhurgoyfBase {
  constructor (game) {
    super(game, "Lhurgoyf", "Commander 2011", "CMD");
  }
}

module.exports = Lhurgoyf;
