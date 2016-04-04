"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntedWumpus extends Card {
  constructor(game) {
    super(game, "Hunted Wumpus", "Eighth Edition", "8ED");
  }
}

module.exports = HuntedWumpus;
