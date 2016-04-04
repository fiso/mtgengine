"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoyalFalcon extends Card {
  constructor(game) {
    super(game, "Royal Falcon", "Starter 1999", "S99");
  }
}

module.exports = RoyalFalcon;
