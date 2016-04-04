"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodmarkMentor extends Card {
  constructor(game) {
    super(game, "Bloodmark Mentor", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = BloodmarkMentor;
