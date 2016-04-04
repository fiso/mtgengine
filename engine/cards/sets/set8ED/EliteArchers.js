"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EliteArchers extends Card {
  constructor(game) {
    super(game, "Elite Archers", "Eighth Edition", "8ED");
  }
}

module.exports = EliteArchers;
