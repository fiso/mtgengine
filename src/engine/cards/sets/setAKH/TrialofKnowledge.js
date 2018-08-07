"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrialofKnowledge extends UnimplementedCard {
  constructor (game) {
    super(game, "Trial of Knowledge", "Amonkhet", "AKH");
  }
}

module.exports = TrialofKnowledge;
