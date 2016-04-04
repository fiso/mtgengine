"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NorthStar extends Card {
  constructor(game) {
    super(game, "North Star", "Legends", "LEG");
  }
}

module.exports = NorthStar;
