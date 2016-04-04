"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasHotTub extends Card {
  constructor(game) {
    super(game, "Urza's Hot Tub", "Unhinged", "UNH");
  }
}

module.exports = UrzasHotTub;
