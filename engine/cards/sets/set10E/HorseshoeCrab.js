"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HorseshoeCrab extends Card {
  constructor(game) {
    super(game, "Horseshoe Crab", "Tenth Edition", "10E");
  }
}

module.exports = HorseshoeCrab;
