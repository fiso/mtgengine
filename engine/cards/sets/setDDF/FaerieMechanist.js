"use strict";
const Constants = require ("../../../Constants");
const FaerieMechanistBase = require("../setCON/FaerieMechanist");

class FaerieMechanist extends FaerieMechanistBase {
  constructor(game) {
    super(game, "Faerie Mechanist", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = FaerieMechanist;
