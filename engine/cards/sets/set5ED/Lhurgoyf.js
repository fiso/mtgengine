"use strict";
const Constants = require ("../../../Constants");
const LhurgoyfBase = require("../setBRB/Lhurgoyf");

class Lhurgoyf extends LhurgoyfBase {
  constructor(game) {
    super(game, "Lhurgoyf", "Fifth Edition", "5ED");
  }
}

module.exports = Lhurgoyf;
