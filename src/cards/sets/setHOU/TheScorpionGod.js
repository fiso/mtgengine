"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheScorpionGod extends UnimplementedCard {
  constructor (game) {
    super(game, "The Scorpion God", "Hour of Devastation", "HOU");
  }
}

module.exports = TheScorpionGod;
