"use strict";
const Constants = require ("../../../Constants");
const LhurgoyfBase = require("../setBRB/Lhurgoyf");

class Lhurgoyf extends LhurgoyfBase {
  constructor (game) {
    super(game, "Lhurgoyf", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Lhurgoyf;
