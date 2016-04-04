"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreaterStoneSpiritBase = require("../setCSP/GreaterStoneSpirit.js");

class GreaterStoneSpirit extends GreaterStoneSpiritBase {
  constructor(game) {
    super(game, "Greater Stone Spirit", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = GreaterStoneSpirit;
