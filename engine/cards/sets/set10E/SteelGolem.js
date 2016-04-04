"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteelGolem extends Card {
  constructor(game) {
    super(game, "Steel Golem", "Tenth Edition", "10E");
  }
}

module.exports = SteelGolem;
