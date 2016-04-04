"use strict";
const Constants = require ("../../../Constants");
const FamineBase = require("../setC13/Famine");

class Famine extends FamineBase {
  constructor(game) {
    super(game, "Famine", "Vintage Masters", "VMA");
  }
}

module.exports = Famine;
