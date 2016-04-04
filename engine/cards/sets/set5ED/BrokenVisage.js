"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrokenVisage extends Card {
  constructor(game) {
    super(game, "Broken Visage", "Fifth Edition", "5ED");
  }
}

module.exports = BrokenVisage;
