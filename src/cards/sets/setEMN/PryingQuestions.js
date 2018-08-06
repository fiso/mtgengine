"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PryingQuestions extends UnimplementedCard {
  constructor (game) {
    super(game, "Prying Questions", "Eldritch Moon", "EMN");
  }
}

module.exports = PryingQuestions;
