"use strict";
const Constants = require ("../../../Constants");
const HumanFrailtyBase = require("../setAVR/HumanFrailty");

class HumanFrailty extends HumanFrailtyBase {
  constructor(game) {
    super(game, "Human Frailty", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = HumanFrailty;
