"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HokoriDustDrinker extends Card {
  constructor(game) {
    super(game, "Hokori, Dust Drinker", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HokoriDustDrinker;
