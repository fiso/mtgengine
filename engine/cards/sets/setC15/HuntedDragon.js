"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntedDragon extends Card {
  constructor(game) {
    super(game, "Hunted Dragon", "Commander 2015", "C15");
  }
}

module.exports = HuntedDragon;
