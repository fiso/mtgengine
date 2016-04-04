"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoilingBlood extends Card {
  constructor(game) {
    super(game, "Boiling Blood", "Weatherlight", "WTH");
  }
}

module.exports = BoilingBlood;
