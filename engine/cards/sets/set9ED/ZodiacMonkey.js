"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZodiacMonkey extends Card {
  constructor(game) {
    super(game, "Zodiac Monkey", "Ninth Edition", "9ED");
  }
}

module.exports = ZodiacMonkey;
