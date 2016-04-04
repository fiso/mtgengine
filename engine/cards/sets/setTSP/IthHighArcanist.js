"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IthHighArcanist extends Card {
  constructor(game) {
    super(game, "Ith, High Arcanist", "Time Spiral", "TSP");
  }
}

module.exports = IthHighArcanist;
