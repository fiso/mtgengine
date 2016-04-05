"use strict";
const Constants = require ("../../../Constants");
const FalseDemiseBase = require("../setALL/FalseDemise");

class FalseDemise extends FalseDemiseBase {
  constructor(game) {
    super(game, "False Demise", "Mercadian Masques", "MMQ");
  }
}

module.exports = FalseDemise;
