"use strict";
const Constants = require ("../../../Constants");
const LhurgoyfBase = require("../setBRB/Lhurgoyf");

class Lhurgoyf extends LhurgoyfBase {
  constructor (game) {
    super(game, "Lhurgoyf", "Eighth Edition", "8ED");
  }
}

module.exports = Lhurgoyf;
