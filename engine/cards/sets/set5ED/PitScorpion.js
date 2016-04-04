"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PitScorpion extends Card {
  constructor(game) {
    super(game, "Pit Scorpion", "Fifth Edition", "5ED");
  }
}

module.exports = PitScorpion;
