"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeatRay extends Card {
  constructor(game) {
    super(game, "Heat Ray", "Battle Royale Box Set", "BRB");
  }
}

module.exports = HeatRay;
