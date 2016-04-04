"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmartAss extends Card {
  constructor(game) {
    super(game, "Smart Ass", "Unhinged", "UNH");
  }
}

module.exports = SmartAss;
