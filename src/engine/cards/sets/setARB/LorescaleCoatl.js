"use strict";
const Constants = require ("../../../Constants");
const LorescaleCoatlBase = require("../setA25/LorescaleCoatl");

class LorescaleCoatl extends LorescaleCoatlBase {
  constructor (game) {
    super(game, "Lorescale Coatl", "Alara Reborn", "ARB");
  }
}

module.exports = LorescaleCoatl;
