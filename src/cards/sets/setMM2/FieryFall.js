"use strict";
const Constants = require ("../../../Constants");
const FieryFallBase = require("../setCON/FieryFall");

class FieryFall extends FieryFallBase {
  constructor(game) {
    super(game, "Fiery Fall", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = FieryFall;
