"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoyalAssassin extends Card {
  constructor(game) {
    super(game, "Royal Assassin", "Collector's Edition", "CED");
  }
}

module.exports = RoyalAssassin;
