"use strict";
const Constants = require ("../../../Constants");
const MortifyBase = require("../setC18/Mortify");

class Mortify extends MortifyBase {
  constructor (game) {
    super(game, "Mortify", "Commander 2011", "CMD");
  }
}

module.exports = Mortify;
