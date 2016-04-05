"use strict";
const Constants = require ("../../../Constants");
const PaladinofPrahvBase = require("../setDIS/PaladinofPrahv");

class PaladinofPrahv extends PaladinofPrahvBase {
  constructor(game) {
    super(game, "Paladin of Prahv", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = PaladinofPrahv;
