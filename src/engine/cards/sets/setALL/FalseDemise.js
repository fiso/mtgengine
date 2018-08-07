"use strict";
const Constants = require ("../../../Constants");
const FalseDemiseBase = require("../setMMQ/FalseDemise");

class FalseDemise extends FalseDemiseBase {
  constructor (game) {
    super(game, "False Demise", "Alliances", "ALL");
  }
}

module.exports = FalseDemise;
