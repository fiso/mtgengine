"use strict";
const Constants = require ("../../../Constants");
const MortifyBase = require("../setC18/Mortify");

class Mortify extends MortifyBase {
  constructor (game) {
    super(game, "Mortify", "Commander 2017", "C17");
  }
}

module.exports = Mortify;
