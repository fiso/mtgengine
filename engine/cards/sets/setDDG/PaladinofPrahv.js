"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PaladinofPrahvBase = require("../setDIS/PaladinofPrahv.js");

class PaladinofPrahv extends PaladinofPrahvBase {
  constructor(game) {
    super(game, "Paladin of Prahv", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = PaladinofPrahv;
