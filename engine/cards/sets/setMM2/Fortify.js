"use strict";
const Constants = require ("../../../Constants");
const FortifyBase = require("../setM14/Fortify");

class Fortify extends FortifyBase {
  constructor(game) {
    super(game, "Fortify", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Fortify;
