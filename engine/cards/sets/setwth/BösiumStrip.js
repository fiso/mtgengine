"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BösiumStrip extends Card {
  constructor(game) {
    super(game, "Bösium Strip", "Weatherlight", "WTH");
  }
}

module.exports = BösiumStrip;
