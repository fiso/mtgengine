"use strict";
const Constants = require ("../../../Constants");
const DeflectionBase = require("../set6ED/Deflection");

class Deflection extends DeflectionBase {
  constructor (game) {
    super(game, "Deflection", "Seventh Edition", "7ED");
  }
}

module.exports = Deflection;
