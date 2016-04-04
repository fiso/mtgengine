"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SymbolofUnsummoningBase = require("../setME4/SymbolofUnsummoning.js");

class SymbolofUnsummoning extends SymbolofUnsummoningBase {
  constructor(game) {
    super(game, "Symbol of Unsummoning", "Portal", "POR");
  }
}

module.exports = SymbolofUnsummoning;
