"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PressforAnswers extends UnimplementedCard {
  constructor (game) {
    super(game, "Press for Answers", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PressforAnswers;
