"use strict";
const Constants = require ("../../../Constants");
const MortifyBase = require("../setC18/Mortify");

class Mortify extends MortifyBase {
  constructor (game) {
    super(game, "Mortify", "Commander 2016", "C16");
  }
}

module.exports = Mortify;
