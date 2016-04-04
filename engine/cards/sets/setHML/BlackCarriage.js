"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackCarriage extends Card {
  constructor(game) {
    super(game, "Black Carriage", "Homelands", "HML");
  }
}

module.exports = BlackCarriage;
