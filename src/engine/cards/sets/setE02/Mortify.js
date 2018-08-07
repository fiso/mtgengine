"use strict";
const Constants = require ("../../../Constants");
const MortifyBase = require("../setC18/Mortify");

class Mortify extends MortifyBase {
  constructor (game) {
    super(game, "Mortify", "Explorers of Ixalan", "E02");
  }
}

module.exports = Mortify;
