"use strict";
const Constants = require ("../../../Constants");
const CabalRitualBase = require("../setTOR/CabalRitual");

class CabalRitual extends CabalRitualBase {
  constructor(game) {
    super(game, "Cabal Ritual", "Vintage Masters", "VMA");
  }
}

module.exports = CabalRitual;
