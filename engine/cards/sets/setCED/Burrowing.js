"use strict";
const Constants = require ("../../../Constants");
const BurrowingBase = require("../set6ED/Burrowing");

class Burrowing extends BurrowingBase {
  constructor(game) {
    super(game, "Burrowing", "Collector's Edition", "CED");
  }
}

module.exports = Burrowing;
