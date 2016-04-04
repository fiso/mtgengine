"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraftedSkullcap extends Card {
  constructor(game) {
    super(game, "Grafted Skullcap", "Seventh Edition", "7ED");
  }
}

module.exports = GraftedSkullcap;
