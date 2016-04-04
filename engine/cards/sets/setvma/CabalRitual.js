"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CabalRitualBase = require("../setTOR/CabalRitual.js");

class CabalRitual extends CabalRitualBase {
  constructor(game) {
    super(game, "Cabal Ritual", "Vintage Masters", "VMA");
  }
}

module.exports = CabalRitual;
