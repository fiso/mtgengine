"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrinkofDisaster extends Card {
  constructor(game) {
    super(game, "Brink of Disaster", "Magic 2012", "M12");
  }
}

module.exports = BrinkofDisaster;
