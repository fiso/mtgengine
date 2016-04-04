"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElderMasteryBase = require("../setCON/ElderMastery.js");

class ElderMastery extends ElderMasteryBase {
  constructor(game) {
    super(game, "Elder Mastery", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = ElderMastery;
