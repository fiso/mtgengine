"use strict";
const Constants = require ("../../../Constants");
const ConeofFlameBase = require("../setW16/ConeofFlame");

class ConeofFlame extends ConeofFlameBase {
  constructor (game) {
    super(game, "Cone of Flame", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = ConeofFlame;
