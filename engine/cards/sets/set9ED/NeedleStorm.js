"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeedleStorm extends Card {
  constructor(game) {
    super(game, "Needle Storm", "Ninth Edition", "9ED");
  }
}

module.exports = NeedleStorm;
