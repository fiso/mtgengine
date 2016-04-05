"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodmarkMentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodmark Mentor", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = BloodmarkMentor;
