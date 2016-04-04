"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Development extends Card {
  constructor(game) {
    super(game, "Development", "Dissension", "DIS");
  }
}

module.exports = Development;
