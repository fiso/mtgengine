"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuestionElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Question Elemental?", "Unhinged", "UNH");
  }
}

module.exports = QuestionElemental;
