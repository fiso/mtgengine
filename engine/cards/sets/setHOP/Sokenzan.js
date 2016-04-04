"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sokenzan extends Card {
  constructor(game) {
    super(game, "Sokenzan", "Planechase", "HOP");
  }
}

module.exports = Sokenzan;
