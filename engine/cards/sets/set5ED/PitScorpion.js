"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitScorpion extends UnimplementedCard {
  constructor(game) {
    super(game, "Pit Scorpion", "Fifth Edition", "5ED");
  }
}

module.exports = PitScorpion;
