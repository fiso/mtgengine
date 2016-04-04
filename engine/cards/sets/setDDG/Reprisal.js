"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReprisalBase = require("../setALL/Reprisal.js");

class Reprisal extends ReprisalBase {
  constructor(game) {
    super(game, "Reprisal", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = Reprisal;
