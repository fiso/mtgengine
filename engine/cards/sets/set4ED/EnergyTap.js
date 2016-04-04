"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnergyTap extends Card {
  constructor(game) {
    super(game, "Energy Tap", "Fourth Edition", "4ED");
  }
}

module.exports = EnergyTap;
