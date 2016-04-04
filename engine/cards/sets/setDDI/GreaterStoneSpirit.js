"use strict";
const Constants = require ("../../../Constants");
const GreaterStoneSpiritBase = require("../setCSP/GreaterStoneSpirit");

class GreaterStoneSpirit extends GreaterStoneSpiritBase {
  constructor(game) {
    super(game, "Greater Stone Spirit", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = GreaterStoneSpirit;
