"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnlightenedTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Enlightened Tutor", "Arena League", "pARL");
  }
}

module.exports = EnlightenedTutor;
