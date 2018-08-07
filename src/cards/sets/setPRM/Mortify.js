"use strict";
const Constants = require ("../../../Constants");
const MortifyBase = require("../setC18/Mortify");

class Mortify extends MortifyBase {
  constructor (game) {
    super(game, "Mortify", "Magic Online Promos", "PRM");
  }
}

module.exports = Mortify;
