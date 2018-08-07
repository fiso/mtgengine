"use strict";
const Constants = require ("../../../Constants");
const BurrowingBase = require("../set6ED/Burrowing");

class Burrowing extends BurrowingBase {
  constructor (game) {
    super(game, "Burrowing", "Revised Edition", "3ED");
  }
}

module.exports = Burrowing;
