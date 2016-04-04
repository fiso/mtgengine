"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Crime extends Card {
  constructor(game) {
    super(game, "Crime", "Dissension", "DIS");
  }
}

module.exports = Crime;
